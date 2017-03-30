import express from 'express'
import consign from 'consign'

const app = express();
const cwd = process.env.NODE_ENV === 'production' ? 'dist' : 'src'

consign({cwd: cwd, verbose:true})
  .include("config.js")
  .then("db.js")
  .then("model")
  .then("auth.js")
  .then("middleware.js")
  .then("boot.js")
  .then("routes")
  .into(app)
