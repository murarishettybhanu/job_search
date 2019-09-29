const Company = require('../database/models/Company')

module.exports = (req, res) => {
    Company.create(req.body, (error, user) => {
    if (error) {
      const registrationErrors = Object.keys(error.errors).map(key => error.errors[key].message)

      req.flash('registrationErrors', registrationErrors)
      req.flash('data', req.body)
      return res.redirect('/auth/companyRegister')
    }
    res.redirect('/')
  })
}
