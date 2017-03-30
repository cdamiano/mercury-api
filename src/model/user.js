import mongoose from 'mongoose';
import bcrypt from 'bcrypt'

const Schema = mongoose.Schema

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
  console.log(this);
  this.password = bcrypt.hashSync(this.password, salt);
  next();
});

module.exports = app => {
  return mongoose.model('User', userSchema)
}
