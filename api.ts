import express, { Request, Response} from "express"; 
import cors from "cors";
import functions from "firebase-functions";
import { getAllVisuals } from "./src/visuals";


const app = express();
// const PORT = 3000

app.use(express.json());
app.use(cors());

app.get("/", (req: Request, res: Response) => {
    res.send("API IS CONNECTING")
})
app.get("/visual-story-one", getAllVisuals)

// app.listen(3000, () => {
//     console.log("listening on port 3000")
// })

export const api = functions.https.onRequest(app);