import { sequelize } from "./database.js";
import { AlumnosFuturosModel } from "../models/Alumnos_futuros.model.js";
import { AlumnosActualesModel } from "../models/Alumnos_actuales.model.js";

export async function conectarBD() {
    try {
        await sequelize.sync()
        console.log('Base de datos conectada');
    } catch (err) {
        console.error(err);
    }
}