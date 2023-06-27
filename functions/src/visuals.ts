import { Request, Response} from "express"; 
import { db } from "./mongoConnect";
// import { ObjectId } from "mongodb";

const coll = db.collection("visual-story-one");


export async function getAllVisuals(req: Request, res: Response) {
    try {
        console.log("visuals")
        const visualNovel = await coll.find({}).toArray();
        res.setHeader("Content-Type", "application/json");
        res.status(200).send(visualNovel);
    } catch (error) {
        console.error('Error retrieving data:', error);
        res.status(500).json({error: "Internal server error"});
    }
}

