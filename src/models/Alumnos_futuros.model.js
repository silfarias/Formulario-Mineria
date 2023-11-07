import { sequelize } from "../config/database.js";
import { DataTypes } from "sequelize";


export const AlumnosFuturosModel = sequelize.define('alumnos_futuros', {
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
    tableName: 'alumnos_futuros'
})



