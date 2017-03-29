import bodyParser from 'body-parser'
import forcessl from './forcessl.js'

module.exports = app => {
  app.set("port", app.config.port);
  app.use(bodyParser.json());
  app.use(forcessl);
}
