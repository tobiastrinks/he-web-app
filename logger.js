const log = require('log-to-file');
const fs = require('fs');
const path = require('path');

module.exports = class Logger {
    getLogFile () {
        const directoryPath = path.join(__dirname, 'logs');
        const filePath = path.join(directoryPath, 'node.log');

        if (!fs.existsSync(directoryPath)) {
            fs.mkdirSync(directoryPath);
        }
        if (!fs.existsSync(filePath)) {
            fs.writeFileSync(filePath, '');
        }
        return filePath;
    }
    logReq (method, requestedUrl, message) {
        log(`${method} ${requestedUrl} ${message}`, this.getLogFile());
    }
};
