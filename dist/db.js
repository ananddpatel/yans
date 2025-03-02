"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
const knex_1 = __importDefault(require("knex"));
const path_1 = require("path");
const dbFiles = {
    dev: 'db-dev.sqlite3',
    prod: 'dev-prod.sqlite3',
};
exports.db = (0, knex_1.default)({
    client: 'sqlite3',
    connection: {
        filename: (0, path_1.resolve)(__dirname, `../`, dbFiles[process.env.ENV]),
    },
    useNullAsDefault: true,
});
