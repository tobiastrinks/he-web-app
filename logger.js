const log = require('log-to-file');
const fs = require('fs');
const path = require('path');

const logDirectory = './logs';

const getLogFile = () => {
  const filePath = path.join(logDirectory, 'node.log');

  if (!fs.existsSync(logDirectory)) {
    fs.mkdirSync(logDirectory);
  }
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, '');
  }
  return filePath;
};

exports.logReq = (method, requestedUrl, message) => {
  log(`${method} ${requestedUrl} ${message}`, getLogFile());
};
