# be-practice
How to set up backend server
- create new repo on github

How to add gitignore
1. npm init -y
2. npx gitignore node

Create index.js
- run "touch index.js" on terminal (optional)

Install Nodemon
- npm i nodemon -D

Run server using nodemon for deploying to heroku 
go to package.json and add script:
"scripts": {
    "start": "node index.js",
    "server": "nodemon index.js
}


npm i express helmet knex sqlite3

Write code in index.js 
- see index.js file for code

Now you can do
- npm run server
- terminal should say API running on port 5000 according to code in index.js
- check on postman if http://localhost:5000 is running

You should be done, go ahead and commit!