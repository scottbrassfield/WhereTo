const Router = require('express').Router
const router = new Router()

module.exports = function(passport) {

  router.post('/login', function(req, res, next) {
    passport.authenticate('local-login', function(err, user) {
      if (err) return next(err)
      if (!user) res.send('Invalid Username')
      req.login(user, function(err) {
        if (err) return next(err)
        return res.send({message: 'Login successful'})
      })
    })(req, res, next)
  })

  router.post('/signup', function(req, res, next) {
    passport.authenticate('local-signup', function(err, user) {
      if (err) return next(err)
      if (!user) res.send('Information not saved.  Try again')
      req.login(user, function(err) {
        if (err) return next(err)
        return res.send({message: 'Signup successful'})
      })
    })(req, res, next)
  })

  return router
}
