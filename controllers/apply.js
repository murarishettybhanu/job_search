const Post = require("../database/models/Post");
const User = require('../database/models/User');

module.exports = async (req, res) => {
    const users = await User.findById(req.session.userId);
    const post = await Post.findById(req.params.id)
    let applicants = post.Applicants
    applicants.push(users)
    post.update({
        Applicants : applicants
    },
    (err,done)=>{
        if(err){
            res.redirect(`/post/$(req.params.id)`)
            console.log(err)
        }else{
            req.flash('data', 'Applied Succesfully for ' + post.title)
            res.redirect('/')
        }
    })
  }
  