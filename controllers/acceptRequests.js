const Company = require('../database/models/Company')


module.exports = async (req, res) => {
  const companys = await Company.find({status:"NotActive"});
  console.log(companys)

  res.render("companyAprovals",{
    companys
  });
}

