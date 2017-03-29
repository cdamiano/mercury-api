module.exports = (req, res, next) => {
  if(process.env.NODE_ENV === 'production' && req.header('x-forwarded-proto') != 'https') {
    return res.redirect(['https://', req.get('Host'), req.url].join(''));
  } else {
    next();
  }
}
