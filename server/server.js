const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 31904;



app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
const Sequelize = require('sequelize');
const db = require('./db.js')
db.sequelize.sync();


app.use("/*", (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});


//Server
app.listen(port, () => console.log(`Server pokrenut na portu ${port}`));
//

module.exports = app;
