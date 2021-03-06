import jwt from 'jsonwebtoken'

module.exports = app => {
  const User = app.model.user;
  const cfg = app.config;

  app.post("/login", (req,res) => {
    if (req.body.email && req.body.password) {
      const email = req.body.email;
      const password = req.body.password;
      User.findOne({'email': email})
        .then( user => {
          if (user.isPassword(user.password, password)) {
            const payload = {id: user._id};
            res.json({
              token: jwt.sign(payload, cfg.jwtSecret, {expiresIn: cfg.jwtExpiry})
            });
          } else {
            res.sendStatus(401);
          }
        }).catch (error => {
          res.sendStatus(401);
        })
    } else {
      res.sendStatus(401);
    }
  });

}
