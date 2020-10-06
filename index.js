const express = require('express')
const helmet = require('helmet'); //provides security defaults

const server = express();

server.use(helmet());
server.use(express.json());  //middleware takes json data and put it in object as javascript

server.get("/", (req, res) => {
  res.status(200).json({ hello: "and welcome" });
})

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`API running on port ${PORT}`));