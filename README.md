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
[Walmart](https://www.walmart.com/),[BestBuy](https://www.bestbuy.com/),
[Costco](https://www.costco.com/)  <br>






## :rocket: Improvements over the Previous project

We have added a lot of new features to slash in this phase 

1. Database Integration: In the previous project, data retrieval relied on calling the scraper on every frontend call, resulting in redundant calls causing slow requests for users. However, in our project, we have integrated a database. This significant improvement allows us to store and retrieve data directly from the database, reducing the need to call the scraper repeatedly. Because of this, we were able to enhance speed, reduce scraper calls, and make data more consistent and scalable. It also increases the optimization of resources.
2. Enhanced Scraper: Our project has revamped the data retrieval process with a highly improved scraper. This enhanced scraper collects data more efficiently and accurately, ensuring faster updates. Additionally, we've fine-tuned the data formatting, resulting in a more user-friendly and visually appealing display. Users can easily access information, compare prices, view product images, and identify the source websites, providing a superior user experience.
3. Image Scraping: Unlike the previous project, we have implemented image scraping in our project. This addition allows users to view product images alongside other information, providing a more comprehensive and engaging experience
4. Sorting and Customization: We've empowered users with sorting options based on prices, product names, websites, and more. This flexibility allows users to organize and filter data according to their preferences.
5. User Interface (UI): In addition to data enhancements, we've invested in a more attractive and user-friendly interface. The UI has been redesigned for a more engaging and visually appealing experience. We have also improved the search function by streamlining it, ensuring that users can now find the information they need with just the press of a single button. Additionally, we've introduced enhanced functionality for managing data, including sorting of tables and pagination, allowing users to customize their viewing experience by selecting the number of items displayed per page, ranging from 5 items to 10, all the way up to 50 items per page
6. Docker Image Accessibility: Users can take advantage of readily available Docker images from our public repository. This accessibility eliminates the need to build images from scratch, saving time and effort.
7. Deployment to Kubernetes: Our project is now deployed on Kubernetes, which brings scalability and resilience to our platform. This ensures that users experience consistent and reliable access to the service.

---
Get ready to supercharge your shopping experience with Slash!
🚀 Getting Started
Slash is open-source and ready for you to explore. Here's how to begin:

<p align="center">
  <a href="#movie_camera-check out-our-video">Checkout our video</a>
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
  <a href="#email-support">Support</a>

</p>

---

## :movie_camera: Checkout our video


https://github.com/SE-Fall2023-Group-41/SlashV2/assets/62643830/02359bf0-1d6b-43cd-93bb-f331589b9aa3



---

## :rocket: Installation

1. Clone the Github repository to a desired location on your computer. You will need [git](https://git-scm.com/) to be preinstalled on your machine. Once the repository is cloned, you will then `cd` into the local repository.

```
git clone https://github.com/SE-Fall2023-Group-41/SlashV2.git
cd SlashV2
```

2. This project uses Python 3 for the scraper, [Quarkus](https://quarkus.io/) for the backend  and [React](https://react.dev/) framework for the frontend. You will also need to install [Docker](https://www.docker.com/get-started/).

For the Scraper to work we ensure that [Python](https://www.python.org/downloads/) and [Pip](https://pip.pypa.io/en/stable/installation/) are preinstalled. All the Python requirements of the project are listed in the `requirements.txt` file. Use pip to install all of those.

```
pip3 install -r requirements.txt
```
3. First we run the scraper. For this we cd into the src folder. Once in the src folder, use the python command to run the main.py file.

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
5. For the frontend setup to ensure that Node 20 is  preinstalled, you will have to cd into the frontend. Once in the frontend folder, use the command npm start



```
cd frontend
For Mac
npm start 
For Windows
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
Here are some handy links to access different aspects of the application:

[Swagger UI for Backend](http://slash-backend-ifjolla-dev.apps.sandbox-m3.1530.p1.openshiftapps.com/q/swagger-ui/): Explore the API using the Swagger UI, where you can experiment and interact with the backend. Below is a snapshot 
<p align="center"><img width="500" src="./assets/se_ss1.png"></p> 

[OpenAPI Specification](http://slash-backend-ifjolla-dev.apps.sandbox-m3.1530.p1.openshiftapps.com/q/openapi ): Access the OpenAPI specification for a detailed description of the API endpoints.


[Slash Web Application](http://slash-frontend-ifjolla-dev.apps.sandbox-m3.1530.p1.openshiftapps.com/): Visit the Slash web application by clicking on this link. Below is a snapshot 
<p align="center"><img width="500" src="./assets/se_ss2.png"></p> 

[Scraper Exposed URL](http://slash-scraper-ifjolla-dev.apps.sandbox-m3.1530.p1.openshiftapps.com/): Access the scraper's exposed URL.
<p align="center"><img width="500" src="./assets/se_ss3.png"></p> 

[PublicDockerImages](https://quay.io/user/ifjollancsu/): Find our public repositories on Quay.io, where you can conveniently use Docker images without the need to build them from scratch.
<p align="center"><img width="500" src="./assets/se_ss4.png"></p> 
Feel free to explore these links to access different components of the application and make the most of its features.


## :computer: Technology Used

- FastAPI : https://fastapi.tiangolo.com
- Docker : https://www.docker.com
- Quarkus: https://quarkus.io/
- Openshifts:  https://docs.openshift.com/



## :file_cabinet: Sort and Search Snapshots

<p align="center">Shows the search function for query laptops</p> 


https://github.com/SE-Fall2023-Group-41/SlashV2/assets/62643830/3104485a-2e9b-4259-826d-f163e25f6d33





<p align="center">Opens a link of the laptop we are interested to buy</p> 

https://github.com/SE-Fall2023-Group-41/SlashV2/assets/62643830/b567edbc-337e-47e4-90a4-57e603b0774b



<p align="center">Sorts by website</p> 

https://github.com/SE-Fall2023-Group-41/SlashV2/assets/62643830/6db1838e-8ef3-4e27-92e6-e870b8774e91




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



# Team Members

## Team Members

- [Ingmar Fjolla](https://github.com/ingmarfjolla)
- [Rishab Muzhangathu](https://github.com/R3Rex31)
- [Rishabh Bhargava](https://github.com/Bullet1403)
- [Russel Lobo](https://github.com/russel0014)

## :email: Support

For any queries and help, please reach out to us at: SEslash0041@gmail.com
Let Slash be your shopping sidekick and embark on a savings adventure like never before!

