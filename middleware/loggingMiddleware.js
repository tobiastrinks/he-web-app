const { logReq } = require('../logger');

module.exports = (req, res, next) => {
  logReq(req.method, req.url, res.error || '');
  next();
};
