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
Slash currently supports the following major e-commerce websites:

- [Walmart](https://www.walmart.com/)
- [BestBuy](https://www.bestbuy.com/)
- [Costco](https://www.costco.com/)
- [Amazon](https://www.amazon.com/)

![ezgif-1-d37cdde22f](https://github.com/michaeldacanay/SlashV2/assets/18317412/f9badf97-973a-4dcb-971f-194b1cac4148)

Table of Contents:
1. [Improvements](#rocket-improvements-over-the-previous-project)
2. [Getting started](#-getting-started)
   - [Installation](#rocket-installation)
   - [Option #2: Docker](#alternatively-running-with-docker)
3. [Some handy links](#some-handy-links)
4. [Technology Used](#computer-technology-used)
5. [Use Cases](#bulb-use-case)
6. [Why?](#page_facing_up-why)
7. [Future Roadmap](#golf-future-roadmap)
8. [Team Members](#team-members)
9. [Support](#email-support)

## :rocket: Improvements over the Previous project

We have added a lot of new features to slash in this phase

Here's the improved version with corrected grammar and structure:

1. Authentication: With Auth0, users can log in using their own accounts.

https://github.com/michaeldacanay/SlashV2/assets/62859405/c029e3a2-349c-4492-8bb4-60f9dac645d4

2. History: Users can now view their search history from the past.


https://github.com/michaeldacanay/SlashV2/assets/62859405/e7c9f5d4-c67d-4801-8523-708b43fae949


3. Wishlist: Users will have a wishlist to save items they are interested in. There also a pop up window show you success added the item.


https://github.com/michaeldacanay/SlashV2/assets/62859405/8c04d94c-8bcf-4a28-b5d0-fff760c7550c


4. Navigation Bar: Users can navigate to the desired page by simply clicking on the page name in the navigation bar. The navigation bar will be different if the user is logged in.


https://github.com/michaeldacanay/SlashV2/assets/62859405/beecbb80-0edb-40e7-b44c-8c858c2755c5


5. Background Color: We added a dropdown menu in the top right corner so users can change the background color to their preference.

https://github.com/michaeldacanay/SlashV2/assets/62859405/f038aba0-66a8-4bd9-b3ab-d8d661214e7b

6. Logo showing: Unlike the previous project, we have replaced store names like Walmart and Amazon with their logo images, scraped in our project. This addition allows users to view product images alongside other information, providing a more comprehensive and engaging experience.


https://github.com/michaeldacanay/SlashV2/assets/62859405/bb5fec81-29f9-4c01-8a96-47f314bdb9c3


7. Filtering: We've empowered users with filter options based on prices and product names. Now, users can find items with keywords and within a certain price range.


https://github.com/michaeldacanay/SlashV2/assets/62859405/e4da4024-57eb-4016-914a-d4e2ed5dbe88


8. Currency: We've implemented another column for users to see prices in other currencies. The drop down menu is no show in the video but in the app. 


https://github.com/michaeldacanay/SlashV2/assets/62859405/5f351e27-8965-4163-b59e-8cac3ecce6c2



9. Fixed Scraper: The previous project had an infinite loop while waiting for the scraping of new items.
10. Other UI Changes: Added currency symbols, changed to the corresponding currency when users select a different currency, added borderlines around each column and row, and made the slash symbol a round one for a better appearance. Changed the Paginator to show the current page and the max page. Changed the style of the home page.
---
Demo video explaining changes here:
https://drive.google.com/file/d/1_qmAfWNKOfanETkdBQy6jV5fg2pQY3hs/view?usp=sharing

Get ready to supercharge your shopping experience with Slash!
# 🚀 Getting Started
Slash is open-source and ready for you to explore. Here's how to begin:

<p align="center">
  <a href="#rocket-installation">Installation</a>
  ::
  <a href="#computer-technology-used">Technology Used</a>
  ::
  <a href="#bulb-use-case">Use Case</a>
  ::
  <a href="#page_facing_up-why">Why</a>
  ::
  <a href="#golf-future-roadmap">Future Roadmap</a>
  ::
  <a href="#email-support">Support</a>
</p>

---

## :rocket: Installation

Prerequisites:

- Install [Python 3](https://www.python.org/downloads/) for scraper and [Pip](https://pip.pypa.io/en/stable/installation/). To verify, run `python --version` or `python3 --version`. Likewise, for pip: `pip --version` or `pip3 --version`
- Install [Node 20+](https://nodejs.org/en/) for node and npm package manager for [React](https://react.dev/) framework for the frontend. To verify, run `node --version`.
- Install [Docker](https://www.docker.com/get-started/). Open Docker Desktop and make sure it is running.
- Install [JDK 17](https://www.oracle.com/java/technologies/javase/jdk17-archive-downloads.html) for [Quarkus](https://quarkus.io/) for the backend. To verify, run `java --version`.


1. Clone the Github repository to a desired location on your computer. You will need [git](https://git-scm.com/) to be preinstalled on your machine. Once the repository is cloned, you will then `cd` into the local repository.

```
git clone https://github.com/michaeldacanay/SlashV2.git
cd SlashV2
```

2. We use Python 3 for the scraper, located in the src folder. All the Python requirements of the project are listed in the `requirements.txt` file. It is suggested to first create a virtual environment before installing dependencies e.g. pipenv, venv, etc. Use pip to install all of those.

```
cd src

# suggested to create virtual environment
# e.g. pipenv
#
# brew install pipenv
# pipenv --python 3.10
# pipenv shell

pip install -r requirements.txt (OR pip3 install -r requirements.txt)
```

3. Run the scraper, using the python command to run the main.py file.

```
# in src
python main.py (OR python3 main.py)
```

4. For the backend setup ensure that JDK 17 is preinstalled, you will have to cd into the backend. Once in the backend folder, use the command mvnw.cmd

```
cd backend

./mvnw compile quarkus:dev  # For Mac
mvnw.cmd quarkus:dev        # For Windows
```

5. For the frontend setup to ensure that Node 20 is preinstalled, you will have to cd into the frontend. Once in the frontend folder, add a .env.development.local file with `REACT_APP_API_URL=http://localhost:8080/api/` environment variable. Then, use the command `npm start`

```
cd frontend
npm install

# .env.development.local (add if not present)
# REACT_APP_API_URL=http://localhost:8080/api/

npm start
```

## Alternatively Running with Docker

To run the application using Docker, follow these steps:

1. Navigate to the `backend` directory:

   ```
   cd backend
   ```

2. Build the backend application using Maven Wrapper:

   ```
   ./mvnw package

   ```

3. Return to the project root:
   ```
   cd ..
   ```
4. Start the Docker containers:
   ```
   docker-compose up
   ```

These commands above will run and build 4 containers locally.
<br>

## Some handy links:

<br>
Here are some handy links to access different aspects of the application (requires application backend to be running):

[Swagger UI for Backend](http://localhost:8080/q/swagger-ui/): Explore the API using the Swagger UI, where you can experiment and interact with the backend. Below is a snapshot

<p align="center"><img width="500" src="./assets/se_ss1.png"></p>

[OpenAPI Specification](http://localhost:8080/q/openapi): Access the OpenAPI specification for a detailed description of the API endpoints.

[Slash Web Application](http://localhost:3000): Visit the Slash web application by clicking on this link. Below is a snapshot

<p align="center"><img width="500" src="./assets/se_ss2.png"></p>

[Scraper Exposed URL](http://localhost:8000): Access the scraper's exposed URL.

<p align="center"><img width="500" src="./assets/se_ss3.png"></p>

Feel free to explore these links to access different components of the application and make the most of its features.

## :computer: Technology Used

- Docker : https://www.docker.com
- Quarkus: https://quarkus.io/
- Auth0: https://auth0.com/

## :bulb: Use Case

- **_Students_**: Students coming to university are generally on a budget and time constraint and generally spend hours wasting time to search for products on Websites. Slash is the perfect tool for these students that slashes all the unnecessary details on a website and helps them get prices for a product across multiple websites.Make the most of this tool in the upcoming Black Friday Sale.
- **_Data Analysts_**: Finding data for any project is one of the most tedious job for a data analyst, and the datasets found might not be the most recent one. Using slash, they can create their own dataset in real time and format it as per their needs so that they can focus on what is actually inportant.

## :page_facing_up: Why

- In a market where we are spoilt for choices, we often look for the best deals.
- The ubiquity of internet access has leveled the retail playing field, making it easy for individuals and businesses to sell products without geographic limitation. In 2020, U.S. e-commerce sales, receiving a boost due to the COVID-19 pandemic, grew 44% and represented more than 21% of total retail sales, according to e-commerce information source Internet Retailer.
- The growth of e-commerce has not only changed the way customers shop, but also their expectations of how brands approach customer service, personalize communications, and provide customers choices.
- E-commerce market has prompted cutthroat competition amongst dealers, which is discernable through the price patterns for products of major market players. Price cuts are somewhat of a norm now and getting the best deal for your money can sometimes be a hassle (even while online shopping).
- This is what Slash aims to reduce by giving you an easy-to-use, all-in-one-place solution for finding the best deals for your products that major market dealers have to offer!
- Slash in its current form is for students who wish to get the best deals out of every e-commerce site and can be used by anyone who is willing to develop an application that consumes these web APIs.
- Future scope includes anything from a web application with a frontend or any Android or IOS application that utilizes these Web APIs at their backend. Anyone can build their own custom application on top of these web APIs.

## :golf: Future Roadmap

- Chrome Extension using the functionalities of Slash API
- An iOS or Android application.
- Add a login feature to store user history to provide features like bookmarking, price drop alerts, and many more.
- Use the stored history to provide personalized product recommendations and deal alerts based on user preferences.

## Team Members

- [Michael Dacanay](https://github.com/michaeldacanay)
- [Logan Williams](https://github.com/LoganWilliams1)
- [Xiaochun Liang](https://github.com/1360119047)

## :email: Support

For any queries and help, please reach out to us at: SEslash0041@gmail.com
Let Slash be your shopping sidekick and embark on a savings adventure like never before!
