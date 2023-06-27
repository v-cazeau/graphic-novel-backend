"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
const mongodb_1 = require("mongodb");
require("dotenv/config");
require('dotenv').config();
const client = new mongodb_1.MongoClient(process.env.DB_CONNECT);
exports.db = client.db("graphic-visuals");
