/* eslint-disable no-console */

const User = require('../models/Users')
const LocalStrategy = require('passport-local').Strategy
const bCrypt = require('bcrypt-nodejs')

module.exports = function(passport) {

  passport.use('local-login', new LocalStrategy({ passReqToCallback: true },
    function(req, username, password, done) {
      User.findOne({ username: username },
        function(err, user) {
          if (err) {
            return done(err)
          }
          if (!user) {
            console.log('User Not Found with username '+username);
            return done(null, false,
              req.flash('message', 'User Not Found'))
          }
          if (!checkPassword(user, password)) {
            return done(null, false,
              req.flash('message', 'Invalid Password'))
          }
          return done(null, user)
        }
      )
    }
  ))


  passport.use('local-register', new LocalStrategy({ passReqToCallback: true },
    function(req, username, password, done) {
      process.nextTick(function() {
        User.findOne({ username: username }, function(err, user) {
          if (err) {
            console.log('Error in signup' + err);
            return done(err)
          }
          if (user) {
            console.log('User already exists');
            return done(null, false,
              req.flash('signupMessage', 'User already exists.'))
          } else {
            var newUser = new User({
              username: username,
              password: createHash(password),
              email: req.param('email'),
            })
            newUser.save(function(err) {
              if (err) {
                console.log('Error in saving user' + err);
                return done(err)
              }
              return done(null, newUser)
            })
          }
        })
      })
  }))

  passport.serializeUser((user, done) => {
    return done(null, user._id)
  })

  passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
      done(err, user)
    })
  })

  function checkPassword(user, password) {
    return bCrypt.compareSync(password, user.password)
  }

  function createHash(password) {
    return bCrypt.hashSync(password, bCrypt.genSaltSync(10), null)
  }

}
