module.exports = (req, res) => {
    res.render('CompanyRegister', {
      errors: req.flash('registrationErrors'),
      data: req.flash('data')[0]
    })
  }
  