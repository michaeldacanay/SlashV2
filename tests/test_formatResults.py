"""
Copyright (C) 2023 SE SlashV2 - All Rights Reserved
You may use, distribute and modify this code under the
terms of the MIT license.
You should have received a copy of the MIT license with
this file. If not, please write to: SEslash0041@gmail.com

"""

import os
import sys
import inspect
currentdir = os.path.dirname(os.path.abspath(inspect.getfile(inspect.currentframe())))
parentdir = os.path.dirname(currentdir)
sys.path.insert(0, parentdir)
import src.scraper.formattr as formatter
from bs4 import BeautifulSoup



def test_formatResults():
    """
    Checks the formatResults function
    """
    titles = [BeautifulSoup('<div class="someclass">title  </div>', "html.parser")]
    prices = [BeautifulSoup('<div class="someclass">$1,099  </div>', "html.parser")]
    links = []
    image_urls = []

    product = formatter.formatResult("example", titles, prices, links, image_urls)
    ans = {"title":"title", "price":"1099", "website":"example"}

    assert product["title"] == ans["title"] and str(product["price"]) == ans["price"] and product["website"] == ans["website"]