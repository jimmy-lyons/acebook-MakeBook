const User = require("../models/user")

const FriendsController = {
  Index: (req, res) => {
    User.find()
    .exec((err, users) => {
      if (err) {
        throw err;
      }
      res.render("friends/index", { friends: friends });
    });
  },
  Search: (req, res) => {
    User.find( 
      {userName:{'$regex' : req.body.userName, '$options' : 'i'}}
    )
      .exec((err, users) => {
        if(err) {
          throw err;
        }
        res.render("friends/index", { users: users });
        });
      }

    }


module.exports = FriendsController;