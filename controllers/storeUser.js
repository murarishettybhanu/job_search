const User = require('../database/models/User')
const path = require('path')

module.exports = (req, res) => {

  const { aadhar,resume } = req.files
  aadhar.mv(path.resolve(__dirname, '..', 'public/posts', aadhar.name))
  const adr = `/posts/${aadhar.name}`
  let rs;
  if(resume){
    resume.mv(path.resolve(__dirname, '..', 'public/posts', resume.name))
     rs = `/posts/${resume.name}`
  }
  else{
     rs = ``
  }

  User.create({
    ...req.body,
    aadhar: adr,
    resume:rs
  },(error, user) => {
    if (error) {
      const registrationErrors = Object.keys(error.errors).map(key => error.errors[key].message)

      req.flash('registrationErrors', registrationErrors)
      req.flash('data', req.body)
      return res.redirect('/auth/userRegister')
    }
    res.redirect('/')
  })
}
