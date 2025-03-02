"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = void 0;
const winston_1 = __importDefault(require("winston"));
const luxon_1 = require("luxon");
const path_1 = require("path");
const formatFn = (info) => `${luxon_1.DateTime.now().toFormat("yyyy-MM-dd HH:mm:ss.SSS")} ${info.level}: [${info.label}] ${info.message}`;
const createLogger = (label) => winston_1.default.createLogger({
    level: "info",
    format: winston_1.default.format.simple(),
    transports: [
        new winston_1.default.transports.Console({
            level: "info",
            format: winston_1.default.format.combine(winston_1.default.format.label({ label }), winston_1.default.format.colorize(), winston_1.default.format.timestamp(), winston_1.default.format.align(), winston_1.default.format.printf(formatFn)),
        }),
        new winston_1.default.transports.File({
            level: "info",
            filename: (0, path_1.resolve)(__dirname, "../logs/server.log"),
            maxsize: 1000000,
            format: winston_1.default.format.combine(winston_1.default.format.label({ label }), winston_1.default.format.timestamp(), winston_1.default.format.align(), winston_1.default.format.printf(formatFn)),
        }),
    ],
});
exports.logger = createLogger("Muroto");
