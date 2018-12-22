# Eat Da Burger!

A Burger Eatin' Application With Node.js/Express/MySQL/Handlebars

# Description

This application demonstrates a simple full stack application with a front end implemented with HTML/CSS and the backend implemented with Node.js and Express . HTML templating is done with the help of Handlebars.

The user may enter any burger name to add it to the menu. This also adds the new burger entry into the MySQL database. The initial burger entry is added as available on the menu . The user may then eat any burger by clicking on Devour it, which moves it into the adjacent column and updates its status accordingly in the database.

# DesignPattern
 Used MVC design pattern in building this module and the project structure looks like this
 
├── config
│   ├── connection.js
│   └── orm.js
│ 
├── controllers
│   └── burgers_controller.js
│
├── db
│   ├── schema.sql
│   └── seeds.sql
│
├── models
│   └── burger.js
│ 
├── node_modules
│ 
├── package.json
│
├── public
│   └── assets
│       ├── css
│       │   └── burger_style.css
│       └── img
│           └── burger.png
│   
│
├── server.js
│
└── views
    ├── index.handlebars
    └── layouts
        └── main.handlebars
# Demo

The demo of the burger eating application can be found here.

https://burgerlounge.herokuapp.com/

# Installation

To run the application locally, first clone this repository with the following command.

git clone git@github.com:bssheetal/burger.git
Next, install the application dependencies.

npm install
Finally, run the node server locally.

node server.js
Now, open the local application on port 8080 at the URL: http://localhost:8080/

Enjoy and have a burger!
