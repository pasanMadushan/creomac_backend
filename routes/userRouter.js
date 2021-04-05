var express = require('express');
const bodyParser = require("body-parser");
const verifyJWT = require("../middleware/Authentication")
var router = express.Router();
router.use(bodyParser.json());


const userController = require("../controllers/userController");

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Redirected to user router');
});

router.get('/getusers',userController.getUsersAction);

router.post('/updateuserstate',userController.updateUserStateAction);

module.exports = router;
