import passport from "passport"
import {Strategy, ExtractJwt} from "passport-jwt"

module.exports = app => {
  const User = app.model.user;
  const cfg = app.config;
  const params = {
    secretOrKey: cfg.jwtSecret,
    jwtFromRequest: ExtractJwt.fromAuthHeader()
  };

  const strategy = new Strategy(params, (payload, done) => {
    User.findOne({'email': payload.email})
      .then(user => {
        if (user) {
          return done(null, user);
        }
        return done(null, false);
      })
      .catch(error => {
        console.log(error);
        done(error, null);
      })
  });

  passport.use(strategy);
  return {
    initialize: () => {
      return passport.initialize();
    },
    authenticate: () => {
      return passport.authenticate("jwt", cfg.jwtSession);
    }
  }
}
