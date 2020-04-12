# My Shelf

This project is build for those who always wanted a place to store the collection of books they have already read, and who always wanted to re-read some of the most remarkable quotes in an easy and quick way, getting only the most important quotes, underlines and annotations from these books.
Here you can input all the book informations, select an url image for the book, and the most important, you can edit and review your notes easily. 

## Demo

![](MyShelfDemo.gif)

## Technologies Used
  
  ### Back end
  
  -  [NodeJS](https://nodejs.org/)
  -  [ExpressJS](https://expressjs.com/)
  -  [Postgres](https://postgresql.org/)
  -  [Sequelize](https://sequelize.org/master/)
  -  [JWT](https://jwt.io/)
  
  ### Front End   
  
-  [ReactJS](https://reactjs.org/)
-  [Redux](https://redux.js.org/)
-  [Redux-Saga](https://redux-saga.js.org/)
-  [React Router v4](https://github.com/ReactTraining/react-router)
-  [Axios](https://github.com/axios/axios)
-  [History](https://www.npmjs.com/package/history)
-  [Immer](https://github.com/immerjs/immer)
-  [Polished](https://polished.js.org/)
-  [React-Toastify](https://fkhadra.github.io/react-toastify/)
-  [styled-components](https://www.styled-components.com/)
-  [React-Icons](https://react-icons.netlify.com/)
-  [Reactotron](https://infinite.red/reactotron)
-  [VS Code][vc] with [EditorConfig][vceditconfig] and [ESLint][vceslint]
   
   
   ## Run Project Locally

Clone or fork this repository,

Assuming you already have Node.JS, Yarn and Docker installed,

first of all, if you need don't have postgres, you can try installing postgres container, following the steps below

## Example:

After installing docker, download the postgres image and set the container parameters

### `docker run --name myshelf -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres`

## Start the container

### `docker start myshelf`

## after cloning this project:

### cd to backend folder:

### install dependencies

### `yarn install`

## in .env.example file:

* you need to set the database environment variables configuration, if you followed the container configuration, you can follow this an example:

DB_HOST=localhost
DB_USER=postgres
DB_PASS=docker
DB_NAME=myshelf

### then rename the folder ".env.example" to ".env" 

 Using some postgres client interface, connect to the database and then create another database with the name you gave in the .env credentials, in this example, the database name is "myshelf"

### install de sequelize cli dependency as a developer dependency passing the flag "-D"

 ### `yarn add sequelize-cli -D`


now you can run migrations to build the relations on database created

### `yarn sequelize db:migrate`


*now the server is ready! you can run it with:

### `yarn dev`

* cd in the frontend directory:

*install dependencies with:

 ### `yarn install`

*Run the front end application:

### `yarn start`


Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

