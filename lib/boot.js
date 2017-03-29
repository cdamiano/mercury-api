module.exports = app => {
  app.listen(app.get("port"), function() {
    console.log(`Server started, listening on port ${app.get("port")}`);
  });
}
