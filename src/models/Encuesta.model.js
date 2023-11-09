import { sequelize } from "../config/database.js";
import { DataTypes } from "sequelize";

export const Encuesta = sequelize.define("encuesta", {
    id_encuesta: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    edad: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    genero: {
        type: DataTypes.STRING,
        allowNull: false,

    },
    localidad: {
        type: DataTypes.STRING,
        allowNull: false
    },
    nivel_estudio: {
        type: DataTypes.STRING,
        allowNull: false
    },
    pregunta1: {
        type: DataTypes.STRING,
        allowNull: false
    }
})