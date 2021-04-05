const newstellerModel = require("../models/newstellerModel");
const db = require("../config/database");

const getNewstellerSubsAction = (req, res) => {
  newstellerModel.getNewstellerSubs()
    .then((subs) => {
      res.statusCode = 200;
      res.set("Content-Type", "application/json");
      res.json({ success: true, subs: subs });
    })
    .catch((err) => {
      res.statusCode = 500;
      res.set("Content-Type", "application/json");
      res.json({ success: false, message: err });
    });
};

module.exports = {
  getNewstellerSubsAction
}
