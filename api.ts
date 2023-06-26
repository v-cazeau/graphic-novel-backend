import express, { Request, Response} from "express"; 
import cors from "cors";
import { getAllVisuals } from "./src/visuals"


const app = express();
const PORT = 3000

app.use(express.json());
app.use(cors());

app.get("/", (req: Request, res: Response) => {
    res.send("hey api still working!!")
})

app.listen(3000, () => {
    console.log("listening on port 3000")
})