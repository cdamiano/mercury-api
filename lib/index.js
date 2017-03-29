import express from 'express'
import consign from 'consign'
import bodyParser from 'body-parser'

const port = process.env.PORT || 3000;
const app = express();
app.set("port", port);

app.use(bodyParser.json());

app.get('/', function(req, res) {
  res.send({"msg": "hello world!!"})
})

consign({verbose:true})
  .include("lib/boot.js")
  .into(app)
