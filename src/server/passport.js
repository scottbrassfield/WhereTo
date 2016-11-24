
module.exports = function(passport, LocalStrategy, User) {

  passport.use(new LocalStrategy((username, password, done) => {
    User.findOne({ username: username }, (user, err) => {
      if (err) { return done(err) }
      if (!user) { return done(null, false) }
      if (!user.verifyPassword(password)) { return done(null, false) }
      return done(null, user)
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

}

  passport.use('registerUser', new LocalStrategy(
    { passReqToCallback: true },
    (req, username, password, done) => {
      var newUser = new User({
        username: username,
        password: password,
        email: req.body.email
      })

      newUser.save(err => {
        if (err) {
          return done(err)
        }
        return done(null, newUser)
      })
    }
  ))
