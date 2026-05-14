const express = require("express")

const app = express()
app.use(express.json())
const cors = require("cors");

const urlRoutes = require("./routes/url.routes")
const dataBase = require("./config/database")

app.use(cors());
app.use("/api/url",urlRoutes)

dataBase()

module.exports = app