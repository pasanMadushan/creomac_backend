const userModel = require("../models/userModel");
const db = require("../config/database");

const getUsersAction = (req, res) => {

  userModel.getUsers()
    .then((user) => {
      res.statusCode = 200;
      res.set("Content-Type", "application/json");
      res.json({ success: true, user: user });
    })
    .catch((err) => {
      res.statusCode = 500;
      res.set("Content-Type", "application/json");
      res.json({ success: false, message: err });
    });
};

const updateUserStateAction = (req,res) =>{
    console.log('controller trigged',req.body.state, req.body.user_id)
    userModel.updateUserState(req.body.user_id,req.body.state)
    .then((state) => {
      res.statusCode = 200;
      res.set("Content-Type", "application/json");
      res.json({ success: true, state: state });
    })
    .catch((err) => {
        console.log(err)
      res.statusCode = 500;
      res.set("Content-Type", "application/json");
      res.json({ success: false, message: err });
    });
}



module.exports = {
  getUsersAction,
  updateUserStateAction
}
