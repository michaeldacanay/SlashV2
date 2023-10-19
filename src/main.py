# package imports
import uvicorn
from typing import Optional
from typing import List
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import RedirectResponse
from fastapi.responses import FileResponse
from pydantic import BaseModel
import csv
import psycopg2
import os 
from dotenv import load_dotenv
from threading import Thread

# local imports
import scraper.scraper as scr

deployment_env = os.getenv('DEPLOYMENT_ENV')
if deployment_env == 'production':
    load_dotenv('.env.prod')
elif deployment_env == 'compose':
    load_dotenv('.env.compose')
else:
    load_dotenv('.env.dev')

dbname = "quarkus"
user = "quarkus"
password = "quarkus"
host = os.getenv('DATABASE_HOST')
port="5432"
# response type define
class jsonScraps(BaseModel):
    timestamp: str
    title: str
    price: str
    website: str
    link: Optional[str] = None


# response type for variety count api
class analysisVarietyCountJson(BaseModel):
    website: str
    count: int


# response type for top cosy value per item over the website
class analysisTopCostJson(BaseModel):
    website: str
    lowest_price: float
    lowest_price_link: str
    highest_price: float
    highest_price_link: str


app = FastAPI()

origins = [
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
async def read_root():
    '''Get documentation of API

    Parameters
    ----------
    None

    Returns
    ----------
    documentation redirect
    '''
    response = RedirectResponse(url='/redoc')
    return response

@app.get("/scrape")
def scrape():
    '''This function will trigger the scraper that will add items to our databse

    Parameters
    ----------
    None

    Returns
    ----------
    ideally, it will return something like "done"
    '''
    Thread(target=search_items_API,args=("all","laptops",)).start()
    Thread(target=search_items_API,args=("all","anime",)).start()
    Thread(target=search_items_API,args=("all","phones",)).start()
    # search_items_API("all","laptops")
    # search_items_API("all","anime")
    # search_items_API("all","mobiles")
    response = "done"
    return response

# @app.get("/{site}/{item_name}", response_model=List[jsonScraps])
def search_items_API(
    site: str,
    item_name: str,
    relevant: Optional[str] = None,
    order_by_col: Optional[str] = None,
    reverse: Optional[bool] = False,
    listLengthInd: Optional[int] = 10,
    export: Optional[bool] = False
):
    '''Wrapper API to fetch AMAZON, WALMART and TARGET query results

    Parameters
    ----------
    item_name: string of item to be searched

    Returns
    ----------
    itemListJson: JSON List
        list of search results as JSON List
    '''


    # building argument
    args = {
        'search': item_name,
        'sort': 'pr' if order_by_col == 'price' else 'pr',  # placeholder TDB
        'des': reverse,  # placeholder TBD
        'num': listLengthInd,
        'relevant': relevant
    }

    scrapers = []

    if site == 'az' or site == 'all':
        scrapers.append('amazon')
    if site == 'wm' or site == 'all':
        scrapers.append('walmart')
    if site == 'tg' or site == 'all':
        scrapers.append('target')
    if site == 'cc' or site == 'all':
        scrapers.append('costco')
    if site == 'bb' or site == 'all':
        scrapers.append('bestbuy')
    if site == 'eb' or site == 'all':
        scrapers.append('ebay')

    # calling scraper.scrape to fetch results
    itemList = scr.scrape(args=args, scrapers=scrapers)
    print("working....")
    if not export and len(itemList) > 0:
        conn = psycopg2.connect(dbname=dbname, user=user, password=password, host=host,port=port)
        cursor = conn.cursor()
        # print(itemList)
        insert_sql = """
        INSERT INTO item (name, itemType, itemURl,itemImageURl,store,price) VALUES (%(title)s,%(item_type)s, %(link)s,%(image_url)s, %(website)s,%(price)s);
        """
        for items in itemList:
            if items.get("price")!= "" and items.get("title") !="": 
                print(items)
                items["title"] = items["title"][:200]
                items["item_type"] = item_name
                cursor.execute(insert_sql,items)
            
        
        conn.commit()
        cursor.close()
        conn.close()




if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)
