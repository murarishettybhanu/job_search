const Post = require('../database/models/Post')
const User = require('../database/models/User')
const Company = require('../database/models/Company')

module.exports = async (req, res) => {

  const posts = await Post.find({}).populate('author');
  const user = await User.findById(req.session.userId)
  const company = await Company.findById(req.session.userId)

  res.render("index", {
    posts,user,company , message:req.flash('data')
  });
}