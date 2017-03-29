import express from 'express'
import consign from 'consign'

const app = express();
const cwd = process.env.NODE_ENV === 'production' ? 'dist' : 'src'

consign({cwd: cwd, verbose:true})
  .then("middleware.js")
  .include("boot.js")
  .then("routes")
  .into(app)
