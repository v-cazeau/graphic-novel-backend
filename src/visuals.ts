import express, { Request, Response} from "express"; 
import { db } from "./mongoConnect";
import { ObjectId } from "mongodb";

const coll = db.collection("visual-story-one");



export async function getAllVisuals(req: Request, res: Response) {
    try {
        const visualNovel = await coll.find({}).toArray();
        res.setHeader("Content-Type", "application/json");
        res.send(visualNovel).status(200);
    } catch (error) {
        console.error('Error retrieving data:', error);
        res.send(500).json({error: "Internal server error"});
    }
}

