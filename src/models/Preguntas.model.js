import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";

export const Preguntas = sequelize.define("preguntas", {
    id_pregunta: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    detalle_pregunta: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    timestamps: true,
    tableName: "preguntas"
})