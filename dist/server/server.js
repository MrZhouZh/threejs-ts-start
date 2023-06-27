"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const node_path_1 = __importDefault(require("node:path"));
const node_http_1 = __importDefault(require("node:http"));
const port = 3000;
class App {
    server;
    port;
    constructor(port) {
        this.port = port;
        const app = (0, express_1.default)();
        app.use(express_1.default.static(node_path_1.default.join(__dirname, '../client')));
        this.server = new node_http_1.default.Server(app);
    }
    start() {
        this.server.listen(this.port, () => {
            console.log(`Server listening on port: ${this.port}.`);
        });
    }
}
new App(port).start();
