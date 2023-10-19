"""
Copyright (C) 2021 SE Slash - All Rights Reserved
You may use, distribute and modify this code under the
terms of the MIT license.
You should have received a copy of the MIT license with
this file. If not, please write to: secheaper@gmail.com

"""
from datetime import datetime
import math
import html
import re

"""
The formatter module focuses on processing raw text and returning it in
the required format.
"""


def formatResult(website, titles, prices, links,image_urls):
    """
    The formatResult function takes the scraped HTML as input, and extracts the
    necessary values from the HTML code. Ex. extracting a price '$19.99' from
    a paragraph tag.
    """
    
    title, price, link,image_url = '', '', '',''
    if titles:
        title = titles[0].get_text().strip()
    if prices:
        price = prices[0].get_text().strip()
        price= re.search(r'\b(\d{1,3}(?:,\d{3})*\b)', price)

        
        if price:
            price = int(price.group(0).replace(',', ''))
    if links:
        link = links[0]['href']
# changes for image url        
    if image_urls and website=='costco':
         image_url = image_urls[0].get('src')
    if image_urls and website=='bestbuy':
         image_url = image_urls[0]['src']
    if image_urls and website=='walmart':
         image_url = image_urls[0].get('src')
    product = {
        'timestamp': datetime.now().strftime("%d/%m/%Y %H:%M:%S"),
        "title": formatTitle(title),
        "price": price,
        "link": f'www.{website}.com{link}',
        "website": website,
        "image_url":image_url,
    }
    if website == 'costco' or website == 'target':
        product['link'] = f'{link}'
    return product



def sortList(arr, sortBy, reverse):
    """
    The sortList function is used to sort the products list based on the
    flags provided as args. Currently, it supports sorting by price.
    """
    if sortBy == "pr":
        return sorted(arr, key=lambda x: getNumbers(x["price"]), reverse=reverse)
    # To-do: sort by rating
    elif sortBy == "ra":
        # return sorted(arr, key=lambda x: getNumbers(x.price), reverse=reverse)
        pass
    return arr


def formatSearchQuery(query):
    """
    The formatSearchQuery function formats the search string into a string that
    can be sent as a url paramenter.
    """
    return query.replace(" ", "+")


def formatSearchQueryForCostco(query):
    """
    The formatSearchQueryForCostco function formats the search string into a string that
    can be sent as a url paramenter.
    """
    queryStrings = query.split(' ')
    formattedQuery = ""
    for str in queryStrings:
        formattedQuery += str
        formattedQuery += '+'
    formattedQuery = formattedQuery[:-1]
    return formattedQuery


def formatTitle(title):
    """
    The formatTitle function formats titles extracted from the scraped HTML code.
    """
    title = html.unescape(title)
    if(len(title) > 40):
        return title[:40] + "..."
    return title


def getNumbers(st):
    """
    The getNumbers function extracts float values (price) from a string.
    Ex. it extracts 10.99 from '$10.99' or 'starting at $10.99'
    """
    ans = ''
    for ch in st:
        if (ch >= '0' and ch <= '9') or ch == '.':
            ans += ch
    try:
        ans = float(ans)
    except:  # noqa: E722
        ans = math.inf
    return ans
