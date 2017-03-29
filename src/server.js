import express from 'express'
import consign from 'consign'
import bodyParser from 'body-parser'

const port = process.env.PORT || 3000;
const app = express();
app.set("port", port);

app.use(bodyParser.json());

const cwd = process.env.NODE_ENV === 'production' ? 'dist' : 'src'
consign({cwd: cwd, verbose:true})
  .include("boot.js")
  .then("routes")
  .into(app)
