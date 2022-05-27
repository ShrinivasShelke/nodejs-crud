const mongoose = require("mongoose");
const express = require("express");
const app = express();
const classA = require('./routes/class-router');
const jwt = require("jsonwebtoken")

const router = express.Router();
app.use(express.json())

app.use('/classes', classA)




app.listen(4000, () => {
    console.log("connected to server 4000")
})

