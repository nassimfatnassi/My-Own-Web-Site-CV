const router = require("express").Router();
const Post = require("../models/Posts");

 
  
  //CREATE POST
router.route('/add').post((req, res) => {
    const name = req.body.name;
    const lastname = req.body.lastname;
    const email = req.body.email;
    const number = req.body.number;
  
    const newPost = new Post({
      name,
      lastname,
      email,
      number
    });

  console.log("newPost ",newPost);

    newPost.save().then(() => res.json('Post added!'))
    .catch(err => console.log(err));
  });

  module.exports = router;