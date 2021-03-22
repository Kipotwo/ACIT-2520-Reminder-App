const express = require("express");
const app = express();
const path = require("path");
const ejsLayouts = require("express-ejs-layouts");
const reminderController = require("./controller/reminder_controller");
//const authController = require("./controller/auth_controller");
const port = process.env.port || 3001;
const session = require("express-session");

//express session setup 
app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: false,
  })
);
//get passport config
const passport = require("./middleware/passport")
//get authroute
const authRoute = require("./routes/authRoute");

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

//middleware stuff
app.use(express.urlencoded({ extended: false }));
app.use(ejsLayouts);
// middleware passport session/initialize
app.use(passport.initialize());
app.use(passport.session());


// Routes start here
// REMINDER ROUTE
app.get("/reminders", reminderController.list);
app.get("/reminder/new", reminderController.new);
app.get("/reminder/:id", reminderController.listOne);
app.get("/reminder/:id/edit", reminderController.edit);
app.post("/reminder/", reminderController.create);
// Implement this yourself
app.post("/reminder/update/:id", reminderController.update);
// Implement this yourself
app.post("/reminder/delete/:id", reminderController.delete);

// AUTH ROUTE
// Fix this to work with passport! The registration does not need to work, you can use the fake database for this.
// app.get("/register", authController.register);
// app.get("/login", authController.login);
// app.post("/register", authController.registerSubmit);
// app.post("/login", authController.loginSubmit);
app.use("/auth", authRoute);


app.listen(port, function () {
  console.log(
    `Server running. Visit: localhost:${port}/reminders in your browser 🚀`
  );
});
