const express = require("express");
const { createClass } = require("../controllers/class-controllers");

const router = express.Router();

router.get("/", (req, res) => {
    res.send("Hello new World api");

})

router.post("/", createClass)

router.get("/login", (req, res) => {
    res.send("Hello new World get");

})

module.exports = router;
