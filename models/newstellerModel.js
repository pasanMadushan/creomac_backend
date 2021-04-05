const db = require('../config/database');


const getNewstellerSubs = () => {
    return new Promise((resolve, reject) => {
      const query = "select * from `Newsteller`";
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
  


module.exports = {
  getNewstellerSubs
}