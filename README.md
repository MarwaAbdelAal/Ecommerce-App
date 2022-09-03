# E-commerce MEAN Stack App

The E-commerce MEAN App combines the power of MongoDB, ExpressJS, Angular, and Node.js with the design and user interactions with the products.

## Installation and Setup
 
- [Download](https://www.mongodb.com/try/download/community) and Start MongoDB service first by 
  ```
  sudo systemctl start mongod
  ```
- You need to install both `nodejs` and `angular` to run this project: 
  - Install nodejs [from here](https://nodejs.org/en/download/) then install `npm` globally by:
    ```
    npm install -g npm
    ```
  - Install the Angular CLI globally by 
    ```
    npm install -g @angular/cli
    ```

- To get started, `git clone` the project into the desired location on your machine.


- Once cloned, `cd` into the `api` directory and run `npm i` to install the required development dependencies. Once these scripts complete, run `npm run dev` to run the development server.
  
- Then, in another terminal `cd` into the `angular` directory and run `npm i` to install the required production dependencies for angular. Once these scripts complete, run `ng serve` to build and serve the application. 

- Once the development server has started and is connected to the MongoDB database, open your preferred browser and navigate to "localhost:4200" to use the app.

## MongoDB Configuration

MongoDB connection string is stored in process.env.db

## Angular Configuration

In development, all Angular components, modules, and services are located in the "angular/src" directory. The app has three main components: Home, Products, and User. The Home component contains the home page serving as the landing page for the app. The Products component uses the data service to retrieve all products and programmatically display them as Material Design cards. Finally, the User component can interact with these products, get/add/edit/delete any product after registering or logging in.