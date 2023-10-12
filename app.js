import express from "express";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import { conectarBD } from "./src/config/database.js";


const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use(helmet());

app.get("/", (req, res) => {
    res.send("Hola Mundo");
})


app.listen(3000, () => {
    console.log("Servidor corriendo en http://localhost:3000");
    conectarBD()
})
