import bodyParser from 'body-parser'
import morgan from 'morgan'
import compression from 'compression'
import forcessl from './forcessl.js'
import logger from "./logger.js"

module.exports = app => {
  app.set("port", app.config.port);
  app.use(bodyParser.json());
  app.use(forcessl);
  app.use(compression());
  app.use(morgan("common", {
    stream: {
      write: (message) => { logger.info(message); }
    }
  }))
}
