/* eslint-disable no-console */
const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const mongoose = require('mongoose')
const session = require('express-session')
const passport = require('passport')
const plansRoutes = require('./plans-routes')
const markersRoutes = require('./markers-routes')
const usersRoutes = require('./users-routes')
const webpack = require('webpack')
const config = require('../../webpack.config')
const compiler = webpack(config)

require('./passport')(passport)

const app = express()

if (process.env.NODE_ENV !== 'production') {

  require('dotenv').config()

  app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
  }))

  app.use(require('webpack-hot-middleware')(compiler))

}

const DB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/where-to'
const PORT = process.env.PORT || 3030

mongoose.Promise = global.Promise
mongoose.connect(DB_URI)

// app.use( express.static( __dirname + '../../dist/public/index.html' ));

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cookieParser())

app.use('/api/users', usersRoutes(passport))
app.use('/api/map', require('./map-routes'))
app.use('/api/plans', plansRoutes)
app.use('/api/markers', markersRoutes)

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../dist/public/index.html'))
})

app.use(session({
  secret: 'secret',
  resave: true,
  saveUninitialized: true
}))

app.use(passport.initialize())
app.use(passport.session())

app.listen(PORT, () => {
  console.log('Listening on port ' + PORT)
})
