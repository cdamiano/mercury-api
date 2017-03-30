module.exports = app => {
  const User = app.model.user
  app.route("/users")
    .all(app.lib.auth.authenticate())
    .get((req, res) => {
      User.find().then( users => {
        res.send(users);
      }).catch( e => {
        res.send(e);
      });
    })

    .post((req, res) => {
      const user = new User();
      user.name = req.body.name;
      user.password = req.body.password;
      user.email = req.body.email;

      user.save().then( () => {
        res.json(user);
      }).catch (err => {
        res.send(err);
      });

    });

};
