const Post = require('../database/models/Post')
const User = require('../database/models/User')
const Company = require('../database/models/Company')

module.exports = async (req, res) => {

  const posts = await Post.find({author:req.session.userId}).populate('author');
  const user = await User.findById(req.session.userId)
  const company = await Company.findById(req.session.userId)

  res.render("companyPosts", {
    posts,user,company
  });
}