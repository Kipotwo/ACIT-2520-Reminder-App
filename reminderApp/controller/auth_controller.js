//let database = require("../database");
const passport = require("../middleware/passport")

let authController = {
  login: (req, res) => {
    res.render("auth/login");
  },

  register: (req, res) => {
    res.render("auth/register");
  },

  loginSubmit: (req, res) => {
    // implement
    
  },

  registerSubmit: (req, res) => {
    // implement
  },
};

module.exports = authController;
