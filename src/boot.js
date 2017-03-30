
module.exports = app => {
  app.listen(app.config.port, function() {
    app.lib.db.connect(app.config.db.uri);
    console.log(`Server started, listening on port ${app.config.port}`);
  });
}
