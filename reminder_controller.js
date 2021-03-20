let database = require("../database");

let remindersController = {
  list: (req, res) => {
    res.render("reminder/index", { reminders: database.cindy.reminders });
  },

  new: (req, res) => {
    res.render("reminder/create");
  },

  listOne: (req, res) => {
    let reminderToFind = req.params.id;
    let searchResult = database.cindy.reminders.find(function (reminder) {
      return reminder.id == reminderToFind;
    });
    if (searchResult != undefined) {
      res.render("reminder/single-reminder", { reminderItem: searchResult });
    } else {
      res.render("reminder/index", { reminders: database.cindy.reminders });
    }
  },

  create: (req, res) => {
    let reminder = {
      id: database.cindy.reminders.length + 1,
      title: req.body.title,
      description: req.body.description,
      completed: false,
    };
    database.cindy.reminders.push(reminder);
    res.redirect("/reminders");
  },

  edit: (req, res) => {
    let reminderToFind = req.params.id;
    let searchResult = database.cindy.reminders.find(function (reminder) {
      return reminder.id == reminderToFind;
    });
    res.render("reminder/edit", { reminderItem: searchResult });
  },

  update: (req, res) => {
    // Gets the reminder
    let reminderToFind = req.params.id;
    let searchResult = database.cindy.reminders.find(function (reminder) {
      return reminder.id == reminderToFind;
    });

    let completed = "Placeholder"

    // since req.body.completed returns a string, we have to convert it to a boolean
    if (req.body.completed === "true"){
      completed = true
    }
    else if (req.body.completed === "false"){
      completed = false
    }

    // Updates the reminder
    searchResult.title = req.body.title
    searchResult.description = req.body.description
    searchResult.completed = completed
    
    // Redirects user back to /reminders
    res.redirect("/reminders")
  },

  delete: (req, res) => {
    // Gets the reminder's index
    let reminderToFind = req.params.id;
    let searchResult = database.cindy.reminders.findIndex(function (reminder) {
      return reminder.id == reminderToFind;
    });

    // Deletes the reminder based on the index
    database.cindy.reminders.splice(searchResult, 1)
    
    // Redirects user back to /reminders
    res.redirect("/reminders")
  },
};

module.exports = remindersController;
