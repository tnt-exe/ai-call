module.exports = function (req, res, next) {
  if (req.headers['api-key'] !== process.env.API_KEY) {
    res.status(401).json({
      message: 'Unauthorized'
    });

    return;
  }
  next();
}