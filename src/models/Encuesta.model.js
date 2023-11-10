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
    id_genero: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    id_localidad: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    id_materia: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    timestamps: true,
    tableName: 'encuesta'
})