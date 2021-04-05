var express = require('express');
const bodyParser = require("body-parser");
const verifyJWT = require("../middleware/Authentication")
var router = express.Router();

router.use(bodyParser.json());

const newstellerController = require("../controllers/newstellerController");

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Redirected to newsteller router');
});


// category routes
router.get('/getnewstellersubs',newstellerController.getNewstellerSubsAction);




module.exports = router;
