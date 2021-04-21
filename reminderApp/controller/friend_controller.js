let database = require("../database");

let friendController = {
    search: (req, res) => {
        res.render ("friend/search", { users: database });
      },
    show: (req,res) =>{
        res.render("friend/show", { friends: database[req.user.id-1].friends})
    }
};
module.exports = friendController;