import { MongoClient } from "mongodb";
import 'dotenv/config'

require('dotenv').config()

const client = new MongoClient(process.env.DB_CONNECT as string)

export const db = client.db("graphic-visuals")