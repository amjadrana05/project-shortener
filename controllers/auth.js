const User = require('../models/auth')

module.exports.createUser = (req, res) =>{
  
  //validation
  // firstname
  if (req.body.firstname.length === 0)
    req.check('firstname', 'firstname is required!').custom(() => false)
  else
    req.check
  // lastname
  // username
  // email
  // phonenumber
  // password
  // repeatpassword

  //validation Errors
  res.json(req.validationErrors());

  //create user
}