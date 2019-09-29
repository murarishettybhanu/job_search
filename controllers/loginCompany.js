const bcrypt = require('bcrypt')
const Company = require('../database/models/Company')

module.exports = (req, res) => {
  const { email, password } = req.body;
  // try to find the user
  Company.findOne({ email }, (error, user) => {
    if (user) {
      if (user.status == "Approved") {
        // compare passwords.
        bcrypt.compare(password, user.password, (error, same) => {
          if (same) {
            req.session.userId = user._id
            res.redirect('/')
          } else {
            res.redirect('/auth/Companylogin')
          }
        })
      }
      else {
        req.flash('data', 'Company Profile under Review Please Contact Admin : demo@demo.com ')
        return res.redirect('/auth/Companylogin')
      }
    }
    else {
      return res.redirect('/auth/Companylogin')
    }
  })
}
