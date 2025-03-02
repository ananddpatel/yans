import { DateTime } from "luxon";
import { resolve } from "path";
import winston from "winston";

const formatFn = (info: any) =>
  `${DateTime.now().toFormat("yyyy-MM-dd HH:mm:ss.SSS")} ${info.level}: [${info.label}] ${info.message}`;

const createLogger = (label: string) =>
  winston.createLogger({
    level: "info",
    format: winston.format.simple(),
    transports: [
      new winston.transports.Console({
        level: "info",
        format: winston.format.combine(
          winston.format.label({ label }),
          winston.format.colorize(),
          winston.format.timestamp(),
          winston.format.align(),
          winston.format.printf(formatFn)
        ),
      }),
      new winston.transports.File({
        level: "info",
        filename: resolve(__dirname, "../logs/server.log"),
        maxsize: 1000000,
        format: winston.format.combine(
          winston.format.label({ label }),
          winston.format.timestamp(),
          winston.format.align(),
          winston.format.printf(formatFn)
        ),
      }),
    ],
  });

export const logger = createLogger("Yans");
