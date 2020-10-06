# be-practice
How to set up backend server
- create new repo on github

How to add gitignore
1. npm init -y     // create package.json file to store a list of dependencies
2. npx gitignore node     // create gitignore file to prevent node modules from being pushed to git repository

Create index.js
- run "touch index.js" on terminal (optional)

Install Nodemon
- npm i nodemon -D    // enable code to automatically restart when changes are saved to index.js, install as a devDependency (-D)

Run server using nodemon for deploying to heroku 
go to package.json and add script:
"scripts": {
    "start": "node index.js",
    "server": "nodemon index.js
}


// Install Additional Dependencies
npm i express knex helmet sqlite3
// express = The Express framework is built on top of the node. js framework and helps in fast-tracking development of server-based applications.
// knex = Knex is a JavaScript query builder for relational databases including PostgreSQL, MySQL, SQLite3, and Oracle.
// helmet = Helmet is a useful Node module that helps you secure HTTP headers returned by your Express apps.
// sqlite3 = Sqlite3 can be used to create a database, define tables, insert and change rows, run queries and manage a SQLite database file.

Write code in index.js 
- see index.js file for code

Now you can do
- npm run server
- terminal should say API running on port 5000 according to code in index.js
- check on postman if http://localhost:5000 is running

You should be done, go ahead and commit!

---------------
Migration records changes to the database structure overtime, just like git commits record changes to code.

Configure knex connections globally:
- npm i -g knex
- knex init (generates knexfile.js)
- in knex.js file, update filename in development...then add host in production

Commonly used migration commands:
How to create migration:
- npx knex migrate:make [migration-name] (npx knex migrate:init) <-- this creates the migrations folder and file
- npx knex migrate:latest <--run pending migrations to update the database

How to add tables:
What is our table about? Track Food AKA menu items

menu_items table
- id: primary key, unsigned(not negative numbers) integer
- name: string, required (NOT NULL), unique, make searching by name fast!
- price: floating point, not required
- available: boolean, default to 'false'

clients table
- id: primary key, uuid (universally unique id), string,
- email: string, unique, index (search quickly by email)
- name: string, index (search quickly by name)

> Every change to the database schema(structure) should be done with a new migration

Create a connection.js file in database manually
add code in index.js to access it:
- const db = require('./database/connection.js');


