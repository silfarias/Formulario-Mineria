import { sequelize } from "../config/database.js";
import { DataTypes } from "sequelize";

export const AlumnosActualesModel = sequelize.define('alumnos_actuales', {
    num_pregunta: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    detalle_pregunta: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {
    timestamps: true,
    tableName: 'alumnos_actuales'
})
