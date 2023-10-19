# package imports
from datetime import datetime
import requests
from ebaysdk.finding import Connection

# local imports
from scraper.formattr import formatTitle

# configs
###############This will need to be edited to include the image, and other things
###############
WALMART = {
    'site': 'walmart',
    'url': 'https://www.walmart.com/search?q=',
    'item_component': 'div',
    'item_indicator': {
        'data-item-id': True
    },
    'title_indicator': 'span.lh-title',
    'price_indicator': 'div.lh-copy',
    'link_indicator': 'a',
    'image_url_indicator': 'img',
}

AMAZON = {
    'site': 'amazon',
    'url': 'https://www.amazon.com/s?k=',
    'item_component': 'div',
    'item_indicator': {
        'data-component-type': 's-search-result'
    },
    'title_indicator': 'h2 a span',
    'price_indicator': 'span.a-price span',
    'link_indicator': 'h2 a.a-link-normal',
    'image_url_indicator': 'img.product-image',
}

COSTCO = {
    'site': 'costco',
    'url': 'https://www.costco.com/CatalogSearch?dept=All&keyword=',
    'item_component': 'div',
    'item_indicator': {
        'class': 'product-tile-set'
    },
    'image_url_indicator': 'img.img-responsive',
    'title_indicator': 'span a',
    'price_indicator': 'div.price',
    'link_indicator': 'span.description a',
    
}

BESTBUY = {
    'site': 'bestbuy',
    'url': 'https://www.bestbuy.com/site/searchpage.jsp?st=',
    'item_component': 'li',
    'item_indicator': {
        'class': 'sku-item'
    },
    'image_url_indicator': 'img.product-image',
    'title_indicator': 'h4 a',
     'price_indicator': 'div.priceView-customer-price span',
     'link_indicator': 'a.image-link',
    
}


CONFIGS = [WALMART, AMAZON, COSTCO, BESTBUY]
