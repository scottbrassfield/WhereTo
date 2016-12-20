const Router = require('express').Router
const router = new Router()

module.exports = function(passport) {

  router.post('/login', function(req, res, next) {
    passport.authenticate('local-login', function(err, user) {
      if (err) return next(err)
      if (!user) res.send('Invalid Username')
      req.logIn(user, function(err) {
        if (err) return next(err)
        res.setHeader('Access-Control-Allow-Credentials', 'true')
        res.send({message: 'Login successful'})
      })
    })(req, res, next)
  })

  router.post('/signup', function(req, res, next) {
    passport.authenticate('local-signup', function(err, user) {
      if (err) return next(err)
      if (!user) res.send('Information not saved. Try again')
      req.logIn(user, function(err) {
        if (err) return next(err)
        res.setHeader('Access-Control-Allow-Credentials', 'true')
        res.send({message: 'Signup successful'})
      })
    })(req, res, next)
  })

  router.get('/logout', function(req, res) {
    req.logout();
    res.send({message: 'Successfully logged out'})
  })

  return router
}
