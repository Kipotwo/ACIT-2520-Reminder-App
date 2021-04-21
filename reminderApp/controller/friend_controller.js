let database = require("../database");
let user_controller = require("./user_controller");

let friendController = {
    search: (req, res) => {
        res.render ("friend/search", { users: database });
      },
    show: (req,res) =>{
        friend_list = []
        req.user.friends.forEach( (user_id)=> {
            friend = user_controller.getUserById(user_id)
            friend_list.push(friend)
            console.log(friend_list)
        })
        
        res.render("friend/show", { friends: friend_list})
    }
};
module.exports = friendController;