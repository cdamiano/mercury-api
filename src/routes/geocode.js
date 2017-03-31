import logger from '../lib/logger.js'

module.exports = app => {
  const geocodeClient = app.lib.geocode;
  app.route("/geocode")
    .all(app.lib.auth.authenticate())
    .get((req, res) => {
      if (req.query.address) {
        geocodeClient({address: req.query.address}).then ( response => {
          logger.info(`GEOCODE: user [${req.user.email}], address: [${req.query.address}]`)
          res.send(response);
        }).catch(err => {
          logger.error(err);
          res.status(500).send("Internal Server Error");
        });
      } else {
        res.status(400).send("Bad Request");
      }
    });
}
