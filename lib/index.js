import express from 'express'
import bodyParser from 'body-parser'

const port = process.env.PORT || 3000;
const app = express();

app.use(bodyParser.json());

app.get('/', function(req, res) {
  res.send({"msg": "hello world again"})
})

app.listen(port, function() {
  console.log(`Server started, listening on port ${port}`);
});

