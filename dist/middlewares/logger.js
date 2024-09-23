"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// middlewares/logger.ts
const winston_1 = require("winston");
// Create the logger instance
const logger = (0, winston_1.createLogger)({
    format: winston_1.format.combine(winston_1.format.timestamp(), winston_1.format.printf((info) => {
        const { timestamp, level, message } = info;
        return `${timestamp || ''} ${level}: ${message}`;
    })),
    transports: [
        new winston_1.transports.Console(),
        new winston_1.transports.File({ filename: 'logs/server.log' })
    ],
});
exports.default = logger;
//# sourceMappingURL=logger.js.map