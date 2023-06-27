"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.api = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const firebase_functions_1 = __importDefault(require("firebase-functions"));
const visuals_1 = require("./src/visuals");
const app = (0, express_1.default)();
// const PORT = 3000
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.get("/", (req, res) => {
    res.send("API IS CONNECTING");
});
app.get("/visual-story-one", visuals_1.getAllVisuals);
// app.listen(3000, () => {
//     console.log("listening on port 3000")
// })
exports.api = firebase_functions_1.default.https.onRequest(app);
