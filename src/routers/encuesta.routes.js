import { Router } from "express";
const encuestaRouter = Router();
import { crearEncuesta } from "../controllers/encuesta.controller.js";

encuestaRouter.post("/", crearEncuesta);

export { encuestaRouter };
