## Travel application
*This project helps to explore:*

-- Setting up webpacks

-- Using api to fetch data

-- Running the code in the development and production mode

-- Editing the webpage and contents using Javascript



## Getting started 
Perform following operation

*Install the npm package to get started*
```
npm install
```
The above command installs all the webpack needed to run the project

Babel loader has been installed in the project to convert the javascript code and html webpack plugin is installed to convert the old version html code into latest version html code 

The service workers have been used in the project to run the code even if the server is closed to load offline data

*Run in production mode to see the functionality*

``` 
npm run build-prod
npm start
```

*Running the code in development mode*

```
npm run build-dev
```
*Running the code in production mode*

```
npm run build-prod
npm start
```
Before starting the server a ``` .env ``` file has to be created to store the api keys
Install the dotenv

```npm install dotenv```

The .env file contains 
```
GEONAMES_USER= "  "
WEATHERBIT_KEY="  "
PIXABAY_KEY="   "

```
*Start the server*
```
npm start
```
The server starts running on the localhost. 

## Acknowledgment
Starter code from www.udacity.com

WeatherBit

Pixabay

Geonames
