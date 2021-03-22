<<<<<<< HEAD
const express = require("express");
const passport = require("../middleware/passport");
const { forwardAuthenticated } = require("../middleware/checkAuth");
//const authController = require("../controller/auth_controller");


const router = express.Router();


//LOCAL STRATEGY
router.get("/login", forwardAuthenticated,(req, res) => res.render("auth/login"));


router.post("/login", passport.authenticate("local",{
  successRedirect: "/reminders",
  failureRedirect: "/auth/login",
}) );


router.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/auth/login");
});



=======
const express = require("express");
const passport = require("../middleware/passport");
const { forwardAuthenticated } = require("../middleware/checkAuth");
//const authController = require("../controller/auth_controller");


const router = express.Router();


//LOCAL STRATEGY
router.get("/login", forwardAuthenticated,(req, res) => res.render("auth/login"));


router.post("/login", passport.authenticate("local",{
  successRedirect: "/reminders",
  failureRedirect: "/auth/login",
}) );


router.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/auth/login");
});



>>>>>>> aeb693b058a0547106ea5ac3557e57a2beeae838
module.exports = router;