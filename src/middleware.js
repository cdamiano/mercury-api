import bodyParser from 'body-parser'
import forcessl from './forcessl.js'

module.exports = app => {
  app.set("port", process.env.PORT || 3000);
  app.use(bodyParser.json());
  app.use(forcessl);
}
