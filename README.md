# SOLGACOM SERVER

This is the part in charge of the backend of the Solgacom application. The application is developed using Node js [Node Documentation](https://nodejs.org/es/docs/).

## Getting Started

---

If you don't have installed Node js install it at the following link [Install Node js](https://nodejs.org/es/download/).

Once installed, write the following command at root repertory:

`npm update`

## Install MySQL or Use Docker-compose image

There are two ways to execute server locally, the first one in installing MySQL on the current OS and the second one is using docker-compose file.

### Using MySQL

    Before testing app it's necessary install MySQL instance in your computer. If you are using Windows, We recomend you install XAMPP, there you can use an phpmyadmin tool to admin the database.

    Following the next tutorial to install it [Install XAMPP](https://www.apachefriends.org/es/download.html)

### Using Docker Compose

Execute `docker-compose up` on the root folder, after open http://localhost:8081 and import ./db/db.sql file.

## Local Test

---

To start with the application, it is necessary that it be tested together with the Solgacom server [Github Repo](https://github.com/solganeo/solgacomServer).

Once the server application is launched, we execute the following command:

`npm run dev`

This command will execute our application

## Git Workflow

---

There are 2 main branches in the projet:

1. main
2. develop

Every developer has their own branch called **features-developername** where it will make its modifications locally to later make a merge request to **develop** branch

If you don't know how to make this process, please contact r.zuniga@solganeo.com or check the following documentation [Branch WorkFlow git](https://git-scm.com/book/en/v2/Git-Branching-Branching-Workflows).

## Directories

---

### Config

> Files to make the Database Connection

### Controller

> Files where functions execute model methods in order to make calls to our DB (One controller by model class)

### db

> sql file (imported on Solgacom Server)

### model

> Classes that describes methodes and attributs of every Database table used in the project (Their methods are called by controller fike)

### node_modules

> Node Libraries installed via node commands

### routes

> We define the API routes that external applications will call once server is running

TEST
