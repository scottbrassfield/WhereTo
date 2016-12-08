/* eslint-disable no-console */

const User = require('../models/Users')
const LocalStrategy = require('passport-local').Strategy
const bCrypt = require('bcrypt-nodejs')

module.exports = function(passport) {

  passport.serializeUser((user, done) => {
    return done(null, user._id)
  })

  passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
      done(err, user)
    })
  })

  passport.use('local-login', new LocalStrategy({ passReqToCallback: true },
    function(req, username, password, done) {
      User.findOne({ username: username },
        function(err, user) {
          if (err) {
            return done(err)
          }
          if (!user) {
            console.log('User not found with username ' + username);
            return done(null, false)
          }
          // if (!checkPassword(user, password)) {
          if (password !== user.password) {
            console.log('Invalid Password')
            return done(null, false)
          }
          return done(null, user)
        }
      )
    }
  ))


  passport.use('local-signup', new LocalStrategy({ passReqToCallback: true },
    function(req, username, password, done) {
      process.nextTick(function() {
        User.findOne({ username: username }, function(err, user) {
          if (err) {
            console.log('Error in signup' + err);
            return done(err)
          }
          if (user) {
            console.log('User already exists');
            return done(null, false)
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

  // function checkPassword(user, password) {
  //   return bCrypt.compareSync(password, user.password)
  // }

  function createHash(password) {
    return bCrypt.hashSync(password, bCrypt.genSaltSync(10), null)
  }

}
