const express = require("express");
const router = express.Router();
    router.get("/", (req, res) => {
    res.render("index");
});

router.get("/N", (req, res) => {
    res.render("N");
});
router.get("/GGuar", (req, res) => {
    res.render("GGuar");
});
router.get("/NGn", (req, res) => {
    res.render("NGn");
});
router.get("/ZAR1", (req, res) => {
    res.render("ZAR1");
});


module.exports = router;