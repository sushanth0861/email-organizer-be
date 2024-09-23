// middlewares/logger.ts
import { createLogger, format, transports, Logger } from 'winston';
import { TransformableInfo } from 'logform';

// Create the logger instance
const logger: Logger = createLogger({
  format: format.combine(
    format.timestamp(),
    format.printf((info: TransformableInfo) => {
      const { timestamp, level, message } = info;
      return `${timestamp || ''} ${level}: ${message}`;
    })
  ),
  transports: [
    new transports.Console(),
    new transports.File({ filename: 'logs/server.log' })
  ],
});

export default logger;
