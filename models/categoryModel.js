const db = require('../config/database');


const getAllCategories = () => {
    return new Promise((resolve, reject) => {
      const query = "select * from `Category` where active = true";
      db.query(query,
      (error, results, fields) => {
        if (!error) {
          // console.log("all cat",results);
          resolve(results);
        } else {
          reject(error);
        }
      });
    });
  }
  

const addnewCatergory = (cat_name) => {
    return new Promise((resolve, reject) => {
      const query1 = "select `active` from `Category` where `cat_name` = ?";
      db.query(query1,[cat_name],
      (error, results, fields) => {
        if (!error) {
          if (results === undefined || results.length == 0){
            const query2 = "insert into `Category` (`cat_name`,`active`) values (?,true)";
            db.query(query2,[cat_name],
            (error, results, fields) => {
            if (!error) {
              resolve(results);
              }
            else{
              reject(error);
            }})
          }

          else if (results[0].active == 0){
            const query2 = "UPDATE `Category` SET `active` = true WHERE `cat_name` = ?";
            db.query(query2,[cat_name],
            (error, results, fields) => {
            if (!error) {
              resolve(results);
              }
            else{
              reject(error);
            }})
          }


          else if (results[0].active == 1){
            resolve('already exists')
          }

        } else {
          reject(error);
        }
      });
    });
  }


  
const deleteCategory  = (cat_id) =>{
  console.log('delete cat id',cat_id)
  return new Promise((resolve, reject) => {
      const query = "update `Category` set `active` = false where `cat_id` = ?";
      db.query(query,[cat_id],
      (error, results, fields) => {
        if (!error) {
          console.log("cat deleted from db")
          resolve(results);
        } else {
          reject(error);
        }
      });
    });
}


const editCategory  = ({cat_id,new_name}) =>{
  console.log('edit cat id',new_name)
  return new Promise((resolve, reject) => {
      const query = "update `Category` set `cat_name` = ? where `cat_id` = ?";
      db.query(query,[new_name,cat_id],
      (error, results, fields) => {
        if (!error) {
          console.log("cat edited ")
          resolve(results);
        } else {
          reject(error);
        }
      });
    });
}





module.exports = {
  getAllCategories,
  addnewCatergory,
  deleteCategory,
  editCategory
}