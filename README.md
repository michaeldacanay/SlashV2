<p align="center">Welcome to Slash: Your Ultimate Shopping Companion!</p> 
<p align="center"><img width="500" src="./assets/slash.png"></p> 

![GitHub](https://img.shields.io/github/license/Urvashi74/slash)
![github workflow](https://github.com/SE-Fall2023-Group-41/SlashV2/actions/workflows/python-app.yml/badge.svg)
[![DOI](https://zenodo.org/badge/431326985.svg)](https://zenodo.org/badge/latestdoi/431326985)
![Github](https://img.shields.io/badge/language-python-red.svg)
![Github](https://img.shields.io/badge/language-node-red.svg)
![GitHub issues](https://img.shields.io/github/issues-raw/SE-Fall2023-Group-41/SlashV2)
![Github closes issues](https://img.shields.io/github/issues-closed-raw/SE-Fall2023-Group-41/SlashV2)
![Github pull requests](https://img.shields.io/github/issues-pr/SE-Fall2023-Group-41/SlashV2)
![Github closed pull requests](https://img.shields.io/github/issues-pr-closed/SE-Fall2023-Group-41/SlashV2)
[![Node.js CI](https://github.com/SE-Fall2023-Group-41/SlashV2/actions/workflows/node.js.yml/badge.svg)](https://github.com/SE-Fall2023-Group-41/SlashV2/actions/workflows/node.js.yml)
[![Python Application](https://github.com/SE-Fall2023-Group-41/SlashV2/actions/workflows/python-app.yml/badge.svg)](https://github.com/SE-Fall2023-Group-41/SlashV2/actions/workflows/python-app.yml)
[![codecov](https://codecov.io/gh/SE-Fall2023-Group-41/SlashV2/graph/badge.svg?token=EF0I1HSNYS)](https://app.codecov.io/gh/SE-Fall2023-Group-41/SlashV2)

Do you love shopping? Are you in search of some good deals while shopping online?! Slash is here to help you look for the best deals!
Discover the latest deals and discounts from your favorite e-commerce websites with Slash.
<br>We've simplified the way you shop online, making it faster, easier, and more powerful than ever before.<br>
🌟 Key Features<br>
Save Time: Slash helps you find the best deals on your desired items across multiple popular e-commerce websites.<br>
User-Friendly APIs: We offer simple and intuitive public APIs, allowing you to filter, sort, and search through search results effortlessly.<br>
Customizable Output: Slash provides JSON responses that you can easily customize to match your specific needs and requirements.
🛒 Supported Websites<br>
Slash currently supports the following major e-commerce websites:<br>
[Walmart](https://www.walmart.com/) <br>
[BestBuy](https://www.bestbuy.com/)  <br>
[Costco](https://www.costco.com/)  <br>






## :rocket: Improvements over Previous project

We have added a lot of new features to slash in this phase 

1. Database{explain}.
2. scraper better with images{explain}.
3. Sort the prices{}
4. .

---
Get ready to supercharge your shopping experience with Slash!
🚀 Getting Started
Slash is open source and ready for you to explore. Here's how to begin:

<p align="center">
  <a href="#movie_camera-checkout-our-video">Checkout our video</a>
  ::
  <a href="#rocket-installation">Installation</a>
  ::
  <a href="#computer-technology-used">Technology Used</a>
  ::
  <a href="#bulb-use-case">Use Case</a>
  ::
  <a href="#file_cabinet-api">API</a>
  ::
  <a href="#page_facing_up-why">Why</a>
  ::
  <a href="#golf-future-roadmap">Future Roadmap</a>
  ::
  <a href="#sparkles-contributors">Contributors</a>
  ::
  <a href="#email-support">Support</a>

</p>

---

## :movie_camera: Checkout our video

<p align="center"><img width="700" src="./assets/slash-phase3.gif"></p>

---

## :rocket: Installation

1. Clone the Github repository to a desired location on your computer. You will need [git](https://git-scm.com/) to be preinstalled on your machine. Once the repository is cloned, you will then `cd` into the local repository.

```
git clone https://github.com/SE-Fall2023-Group-41/SlashV2.git
cd SlashV2
```

2. This project uses Python 3 for the scraper , [Quarkus](https://quarkus.io/) for the backend  and [React](https://react.dev/) framework for the frontend. You will also need to install [Docker](https://www.docker.com/get-started/).

For the Scraper to work we ensure that [Python](https://www.python.org/downloads/) and [Pip](https://pip.pypa.io/en/stable/installation/) are preinstalled. All the python requirements of the project are listed in the `requirements.txt` file. Use pip to install all of those.

```
pip3 install -r requirements.txt
```
3. First we run the scraper.For this we cd into the src folder. Once in the src folder, use the python command to run the main.p file.

```
cd src
For Mac
python3 main.py
For Windows
python main.py
```
4. For the backend setup ensure that JDK 17  is  preinstalled, you will have to cd into the backend. Once in the backend folder, use the command mvnw.cmd
```
cd backend
For Mac
./mvnw compile quarkus:dev
For Windows
mvnw.cmd quarkus : dev
```
5. For the frontend setup to ensure that Node 20 is  preinstalled,you will have to cd into the frontend. Once in the frontend folder, use the command npm start



```
cd frontend
For Mac
npm start 
For Windows
npm start
```


## :computer: Technology Used

- FastAPI : https://fastapi.tiangolo.com
- Docker : https://www.docker.com
- Quarkus: https://quarkus.io/



## :file_cabinet: API

## Documentation

Documentation can be accessed anytime via the below link.

     `https://slash-app-staging.azurewebsites.net/`

## Search Items Api

Wrapper API to fetch slash scrape results. This API provides a one step solution to access scrape results from all our integrated websites.

    https://slash-app-staging.azurewebsites.net/{site}/{item_name}

**Required parameters:**

- **site**: _az_ for amazon; _wm_ for walmart; _eb_ for ebay; _cc_ for costco; _tg_ for target and _bb_ for bustbuy. Alternatively '_all_' in site can be used to get results for all sites.

- **item_name**: items to be searched by slash web api; _examples below_

`https://slash-app-staging.azurewebsites.net/az/toys`

`https://slash-app-staging.azurewebsites.net/all/dell`

**Optional parameters**

- **relevant**: string relevance: items will be ordered by relevance. Not supported currently.
- **order_by_col**: string column_name: items will be ordered by the column name. Currently only the 'price' column ordering is supported.
- **reverse**: boolean val: items will be displayed in the same or the opposite order based on the value of this parameter.
- **listLengthInd**: integer len(default value is 10): sets the upper limit on the number of entries that will be displayed
- **export**: boolean val(default value is false): items can be exported in a csv file;; _examples below_

`https://slash-app-staging.azurewebsites.net/all/dell?export=false&listLengthInd=5&order_by_col=price&reverse=false`

## :bulb: Use Case

- **_Students_**: Students coming to university are generally on a budget and time constraint and generally spend hours wasting time to search for products on Websites. Slash is the perfect tool for these students that slashes all the unnecessary details on a website and helps them get prices for a product across multiple websites.Make the most of this tool in the upcoming Black Friday Sale.
- **_Data Analysts_**: Finding data for any project is one of the most tedious job for a data analyst, and the datasets found might not be the most recent one. Using slash, they can create their own dataset in real time and format it as per their needs so that they can focus on what is actually inportant.

## :page_facing_up: Why

- In a market where we are spoilt for choices, we often look for the best deals.
- The ubiquity of internet access has leveled the retail playing field, making it easy for individuals and businesses to sell products without geographic limitation. In 2020, U.S. e-commerce sales, receiving a boost due to the COVID-19 pandemic, grew 44% and represented more than 21% of total retail sales, according to e-commerce information source Internet Retailer.
- The growth of e-commerce has not only changed the way customers shop, but also their expectations of how brands approach customer service, personalize communications, and provide customers choices.
- E-commerce market has prompted cut throat competition amongst dealers, which is discernable through the price patterns for products of major market players. Price cuts are somewhat of a norm now and getting the best deal for your money can sometimes be a hassle (even while online shopping).
- This is what Slash aims to reduce by giving you an easy to use, all in one place solution for finding the best deals for your products that major market dealers have to offer!
- Slash in its current form is for students who wish to get the best deals out of every e-commerce site and can be used by anyone who is willing to develop an application that consumes these web APIs.
- Future scope includes anything from a web application with a frontend or any Android or IOS application that utilises these Web APIs at their backend. Anyone can build their own custom application on top of these web APIs.

## :golf: Future Roadmap
- Chrome Extension using the functionalities of Slash API
- An iOS or Android application.
- Add login feature to store user history to provide features like bookmarking, price drop alerts and many more.
- Use the stored history to provide personalized product recommendations and deal alerts based on users' preferences.



# Team Members

## Team Members

- [Ingmar Fjolla](https://github.com/ingmarfjolla)
- [Rishab Muzhangathu](https://github.com/R3Rex31)
- [Rishabh Bhargava](https://github.com/Bullet1403)
- [Russel Lobo](https://github.com/russel0014)

## :email: Support

For any queries and help, please reach out to us at: SEslash0041@gmail.com
Let Slash be your shopping sidekick and embark on a savings adventure like never before!

