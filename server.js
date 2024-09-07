import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import addressRoutes from "./routes/addressRoutes.js";
import { connectDB } from "./config/db.js";
import bodyParser from "body-parser";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use(bodyParser.json());

//database
connectDB();

app.use('/api/microchip', addressRoutes)

app.get("/", (req, res) => {
    res.send("Hello World!");
}); 


app.listen(5000, () => console.log("Server started on port 5000"));