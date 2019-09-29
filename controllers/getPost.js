const Post = require('../database/models/Post')
const Company = require('../database/models/Company')
const User = require('../database/models/User')


module.exports = async (req, res) => {
  const post = await Post.findById(req.params.id).populate('author');
  const company = await Company.findById(req.session.userId)
  const user = await User.findById(req.session.userId)

  res.render("post", {
    post,company,user
  });
}