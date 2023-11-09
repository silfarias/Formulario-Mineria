import { sequelize } from "./database.js";
import { Genero } from "../models/Genero.model.js";
import { Localidad } from "../models/Localidad.model.js";
import { Preguntas } from "../models/Preguntas.model.js";
import { Encuesta } from "../models/Encuesta.model.js";

export async function conectarBD() {
    try {
        await sequelize.sync()
        console.log('Base de datos conectada');
    } catch (err) {
        console.error(err);
    }
}