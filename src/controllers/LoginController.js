const User = require("../model/user");

//For Register Page

const registerView = (req, res) => {
  res.render("register");
};
// for login page view

const loginpage = (req, res) => {
  res.send("Loginpage");
};

// for registeration of new user

const newuser = async (req, res) => {
  console.log(req.body);
  let user = new User(req.body);
  res.send("success");
  let result = await user.save();
  console.log(result);

  result = result.toObject();
  console.log(result);
};

module.exports = {
  registerView,
  loginpage,
  newuser,
};
