module.exports = (req, res) => {
    res.render('clogin',{
      message:req.flash('data')
    })
  }
  