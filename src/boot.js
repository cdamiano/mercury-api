module.exports = app => {
  app.listen(app.config.port, function() {
    console.log(`Server started, listening on port ${app.config.port}`);
  });
}
