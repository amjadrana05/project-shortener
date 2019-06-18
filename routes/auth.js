const Route = require('express').Router()
const {createUser} = require('../controllers/auth')

// Get Routes
Route.get('/login', (req, res) => {
  res.render('pages/login')
})

Route.get('/signup', (req, res) => {
  res.render('pages/signup')
})

//Post Routes
Route.post('/signup', createUser)

module.exports = Route