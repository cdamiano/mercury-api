module.exports = app => {
  const User = app.model.user
  app.route("/users")
    .get((req, res) => {
      User.find((err, users) => {
        res.send(users);
      });
    })

    .post((req, res) => {
      const user = new User();
      user.name = req.body.name;
      user.password = req.body.password;
      user.email = req.body.email;

      user.save((err) => {
        if (err)
          res.send(err);
        else
          res.json(user);
      });

    });

};
