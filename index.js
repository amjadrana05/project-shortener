const express = require('express');
const app = express();
require('dotenv').config();
const ejsExpressLayout = require('express-ejs-layouts')
const expressValidator = require('express-validator')

//set view engine
app.set('view engine', 'ejs')

// Middleware
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(express.static(__dirname + '/public'))
app.use(ejsExpressLayout)
app.use(expressValidator())

// Routes
app.get('/', (req, res) => {
  res.render('pages/index')
})

const authRoutes = require('./routes/auth')
app.use('/', authRoutes)

//App Listen port
app.listen(process.env.PORT, () => {
  console.log(`App Runing successfully. http://localhost:3000`)
})