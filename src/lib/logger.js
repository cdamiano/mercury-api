import winston from "winston"

module.exports = new (winston.Logger)({
  transports: [
    new (winston.transports.Console)()
  ]
})
