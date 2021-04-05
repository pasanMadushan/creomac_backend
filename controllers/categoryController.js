const categoryModel = require("../models/categoryModel");
const db = require("../config/database");

const getAllCategoriesAction = (req, res) => {
  categoryModel.getAllCategories()
    .then((cat) => {
      res.statusCode = 200;
      res.set("Content-Type", "application/json");
      res.json({ success: true, cat: cat });
    })
    .catch((err) => {
      res.statusCode = 500;
      res.set("Content-Type", "application/json");
      res.json({ success: false, message: err });
    });
};

const addnewCatergoryAction = (req, res) => {
  categoryModel.addnewCatergory(req.body.cat_name)
    .then((cat) => {
      console.log("results", cat)
      if(cat == 'already exists'){
        res.statusCode= 200
        res.set("Content-Type", "application/json");
        res.json({ success: true, exist:true });
      }
      else{
        res.statusCode = 200;
        res.set("Content-Type", "application/json");
        res.json({ success: true, exist:false, insertId: cat.insertId });
      }
      
    })
    .catch((err) => {
      res.statusCode = 500;
      res.set("Content-Type", "application/json");
      res.json({ success: false, message: err });
    });
};

const deleteCatergoryAction = (req,res)=>{
  // console.log("cat_id",req.body.cat_id)
  categoryModel.deleteCategory(req.body.cat_id)
  .then((cat) => {
      res.statusCode = 200;
      res.set("Content-Type", "application/json");
      res.json({ success: true });
    })
    .catch((err) => {
      res.statusCode = 500;
      res.set("Content-Type", "application/json");
      res.json({ success: false, message: err });
    });
}

const editCatergoryAction = (req,res) =>{
  categoryModel.editCategory(req.body.cat_id, req.body.new_name)

  .then((cat) => {
      // console.log("results", cat)
      if(cat == 'already exists'){
        res.statusCode= 200
        res.set("Content-Type", "application/json");
        res.json({ success: true, exist:true });
      }
      else{
        res.statusCode = 200;
        res.set("Content-Type", "application/json");
        res.json({ success: true, exist:false });
      }
      
    })
    .catch((err) => {
      res.statusCode = 500;
      res.set("Content-Type", "application/json");
      res.json({ success: false, message: err });
    });

}

module.exports = {
  getAllCategoriesAction,
  addnewCatergoryAction,
  deleteCatergoryAction,
  editCatergoryAction
}
