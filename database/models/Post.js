const mongoose = require('mongoose')

const PostSchema = new mongoose.Schema({
  title: String,
  content: String,
  Applicants: Array,
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Company',
    required: true
  },
  image: String,
  createdAt: {
    type: Date,
    default: new Date()
  }
})

const Post = mongoose.model('Post', PostSchema)

module.exports = Post
