"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const server_1 = require("./server");
describe('GET /health', () => {
    it('responds with `ok` json', () => {
        (0, supertest_1.default)(server_1.app)
            .get('/health')
            .expect('Content-Type', /application\/json/)
            .expect(200)
            .then((res) => {
            expect(res.body.health).toBe('ok');
        });
    });
});
