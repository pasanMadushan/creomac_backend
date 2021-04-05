var express = require('express');
const bodyParser = require("body-parser");
const verifyJWT = require("../middleware/Authentication")
var router = express.Router();

router.use(bodyParser.json());

const categoryController = require("../controllers/categoryController");

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Redirected to post router');
});


// category routes
router.get('/allcategories',categoryController.getAllCategoriesAction);
router.post('/addnewcategory',categoryController.addnewCatergoryAction);
router.post('/deletecategory',categoryController.deleteCatergoryAction);
router.post('/editcategory',categoryController.editCatergoryAction);



module.exports = router;
