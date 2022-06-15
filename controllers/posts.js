const Post = require("../models/post");
const User = require("../models/user");
const fs = require('fs');
const stockImageData = fs.readFileSync('./public/Higher_res_mongoose.png', function(err, data) {
  if (err) {
    console.log(err)
  }
  return data.toString('base64')
})

const PostsController = {
  Index: (req, res) => {
    Post.find()
    .sort({'date': -1})
    .limit(10)
    .exec((err, posts) => {
      if (err) {
        throw err;
      }
      
      Promise.all( posts.map( (post) => {
        return User.findById(post.userID)
        .then((result) => {
          if (result.photo.data)
            {return {
              message: post.message,
              userName: post.userName,
              photo: {
                contentType: result.photo.contentType,
                data: result.photo.data.toString('base64')
              }
            }
          } else {
            return {
              message: post.message,
              userName: post.userName,
              photo: {
                contentType: "image/png",
                data: stockImageData.toString('base64')
              }
            }
          }}
        )
      })).then((output) => {
        res.render("posts/index", { posts: output, newUser: false});
      })
    })
  },
  
  New: (req, res) => {
    res.render("posts/new", { newUser: false });
  },

  Update: (req, res) => {
    Post.findOneAndUpdate(
      {_id: req.body.id},
      {$push:
        {comments: req.body.comments}
      },
      (err, result)=>{
      console.log(err);
      console.log(result);
      res.status(201).redirect("/posts");
    });  
  },
  Create: (req, res) => {
    const post = new Post({ 
      message: req.body.message,
      userID: req.session.userID,
      userName: req.session.userName
    });
    post.save((err) => {
      if (err) {
        throw err;
      }

      res.status(201).redirect("/posts");
    });
  },
  Delete: (req, res) => {
    Post.findOneAndDelete(
      {_id: req.body.id},
      (err, result)=>{
      console.log(err);
      console.log(result);
      res.status(201).redirect("/posts");
    });  
  },
};

module.exports = PostsController;
