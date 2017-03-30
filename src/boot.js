import mongoose from 'mongoose'

module.exports = app => {
  app.listen(app.config.port, function() {
    mongoose.connect(app.config.db.uri);
    console.log(`Server started, listening on port ${app.config.port}`);
  });
}
