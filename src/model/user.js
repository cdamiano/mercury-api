import bcrypt from 'bcrypt'

module.exports = app => {
  const Schema = app.lib.db.Schema

  const userSchema = new Schema({
    name: { type: String, required: true},
    password: { type: String, required: true},
    email: { type: String, required: true, unique: true}
  });

  userSchema.methods.isPassword = (encodedPassword, password) => {
    return bcrypt.compareSync(password, encodedPassword);
  }

  userSchema.pre('save', function (next) {
    const salt = bcrypt.genSaltSync();
    this.password = bcrypt.hashSync(this.password, salt);
    next();
  });

  return app.lib.db.model('User', userSchema)
}
