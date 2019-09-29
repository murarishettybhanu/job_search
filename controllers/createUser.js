module.exports = (req, res) => {
  res.render('UserRegister', {
    errors: req.flash('registrationErrors'),
    data: req.flash('data')[0]
  })
}
