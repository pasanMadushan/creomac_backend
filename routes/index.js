var express = require("express");
var router = express.Router();
const db = require("../config/database");


/* GET home page. */
router.get("/", function (req, res) {
  res.send('CMS api service' );
});

module.exports = router;
