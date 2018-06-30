const log = require('log-to-file');

class Logger {
  logReq (method, requestedUrl, message) {
    log(`${method} ${requestedUrl} ${message}`, './logs/node.log');
  }
}

module.exports = Logger;
