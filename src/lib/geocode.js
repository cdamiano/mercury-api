import googleMaps from '@google/maps'
import Promise from 'bluebird'

module.exports = app => {
  const client = googleMaps.createClient({
    key: app.config.google.maps.key
  })

  return Promise.promisify(client.geocode);
}
