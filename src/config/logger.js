const winston = require('winston');
const fs = require('fs');
const path = require('path');

// Create logs folder automatically
const logDir = path.join(__dirname, '../../logs');

if (!fs.existsSync(logDir)) {
    fs.mkdirSync(logDir, { recursive: true });
}

const logger = winston.createLogger({
    level: 'info',

    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.json()
    ),

    transports: [
        new winston.transports.Console(),

        new winston.transports.File({
            filename: path.join(logDir, 'app.log')
        }),

        new winston.transports.File({
            filename: path.join(logDir, 'error.log'),
            level: 'error'
        })
    ]
});

module.exports = logger;