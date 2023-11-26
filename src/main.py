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

app = FastAPI()



app.add_middleware(
    CORSMiddleware,
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

@app.get("/scrape/{store}/{item}")
def scrape(
    store: str,
    item: str
):
    '''This function will trigger the scraper that will add items to our databse

    Parameters
    ----------
    None

    Returns
    ----------
    ideally, it will return something like "done"
    '''
    response = "done"

    if item == "startup":
        a = Thread(target=search_items_API,args=("all","laptops",))
        b = Thread(target=search_items_API,args=("all","anime",))
        c = Thread(target=search_items_API,args=("all","phones",))
        a.start()
        b.start()
        c.start()
        return response

    else:
        search_items_API(store, item)
        return response

# @app.get("/{site}/{item_name}", response_model=List[jsonScraps])
def search_items_API(
    site: str,
    item_name: str,
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
    }

    scrapers = []

#     site_mappings = {
#         'az': 'amazon',
#         'wm': 'walmart',
#         'tg': 'target',
#         'cc': 'costco',
#         'bb': 'bestbuy',
#         'eb': 'ebay',
#     }

    all_sites = ['amazon', 'walmart', 'target', 'costco', 'bestbuy', 'ebay']

    if site == 'all':
#         scrapers = list(site_mappings.values())
        scrapers = all_sites
    else:
#         scrapers = [site_mappings.get(site, None)].filter(None)
        scrapers = [site]


    # calling scraper.scrape to fetch results
    print("starting...")
    itemList = scr.scrape(args=args, scrapers=scrapers)
    print("working....")
    if not export and len(itemList) > 0:
        conn = psycopg2.connect(dbname=dbname, user=user, password=password, host=host,port=port)
        cursor = conn.cursor()
        # print(itemList)

        select_sql = """
        SELECT * FROM item WHERE name = %(title)s AND store = %(website)s;
        """

        insert_sql = """
        INSERT INTO item (name, itemType, itemURl,itemImageURl,store,price) VALUES (%(title)s,%(item_type)s, %(link)s,%(image_url)s, %(website)s,%(price)s);
        """
        for items in itemList:
            if items.get("price")!= "" and items.get("title") !="": 
                print(items)
                items["title"] = items["title"][:200]
                items["item_type"] = item_name

                cursor.execute(select_sql, items)
                existing_item = cursor.fetchone()

                if not existing_item:
                    cursor.execute(insert_sql,items)


        conn.commit()
        cursor.close()
        conn.close()

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)
