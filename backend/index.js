<<<<<<< HEAD
const express = require("express");
const port = 3000;
const server = express();
const db = require("./models");
const cors = require("cors")

server.use(express.json());
server.use(cors());
=======
const express = require("express")
const port = 2000
const server =  express()
const db = require("./models")
const cors = require("cors");
const bearerToken = require("express-bearer-token");

server.use(express.json());
server.use(cors());
server.use(bearerToken());
>>>>>>> master


const {bookRouters} = require("./routers");

server.use("/book", bookRouters);

<<<<<<< HEAD
server.listen(port, () => {
  // db.sequelize.sync({alter:true})
  console.log(`Success Running at PORT: ${port}`);
});
=======
console.log("register")


>>>>>>> master
