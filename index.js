require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");


const db = require("./db/models/index");
const { sequelize } = db
const { publishTopic, subscribeTotopic } = require("./controller");

sequelize
  .authenticate()
  .then((res) => console.log("connected on 5432"))
  .catch((err) => console.log(err.message));

const app = express();

app.use(bodyParser.json());

app.post("/publish/:topic", publishTopic);
app.post("/subscribe/:topic", subscribeTotopic);

module.exports = app;
