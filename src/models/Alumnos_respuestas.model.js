import { sequelize } from "../config/database.js";
import { DataTypes } from "sequelize";

export const AlumnosRespuestasModel = sequelize.define('alumnos_respuestas', {
    num_respuesta: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    detalle: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {
    timestamps: true,
    tableName: 'alumnos_respuestas'
})