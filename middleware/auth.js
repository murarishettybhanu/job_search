const User = require('../database/models/User')
const Company = require('../database/models/Company')

module.exports = (req, res, next) => {
  // fetch user from database
  User.findById(req.session.userId, (error, user) => {
    if (error || !user) {
      return res.redirect('/')
    }

    next()
  })
  // verify user
  // if user is valid, permit request.
  // else redirect.
}

module.exports = (req, res, next) => {
  // fetch user from database
  Company.findById(req.session.userId, (error, user) => {
    if (error || !user) {
      return res.redirect('/')
    }

    next()
  })
  // verify user
  // if user is valid, permit request.
  // else redirect.
}