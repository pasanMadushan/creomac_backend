const db = require('../config/database');


const getUsers = () => {
    return new Promise((resolve, reject) => {
      const query = "select * from `User` where `user_type` = 'admin'";
      db.query(query,
      (error, results, fields) => {
        if (!error) {
          resolve(results);
        } else {
          reject(error);
        }
      });
    });
  }


const updateUserState = (user_id,state) => {
    console.log("model triggered", user_id,state)
    return new Promise((resolve, reject) => {
      const query = "update `User` SET `state` = ? where `user_id` = ? ";
      db.query(query, [state,user_id],
      (error, results, fields) => {
        if (!error) {
          resolve(results);
        } else {
          reject(error);
        }
      });
    });
}
  


module.exports = {
  getUsers,
  updateUserState
}