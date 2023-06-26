import express, { Request, Response} from "express"; 
import { db } from "./mongoConnect";
import { ObjectId } from "mongodb";

const coll = db.collection("");



export async function getAllVisuals(req: Request, res: Response) {
    const visualNovel = await coll.find({}).toArray();
    res.send(visualNovel);
}

