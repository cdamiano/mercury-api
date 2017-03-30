import mongoose from 'mongoose'
import bluebird from 'bluebird'

module.exports = app => {
  mongoose.Promise = bluebird;
  return mongoose;
}
