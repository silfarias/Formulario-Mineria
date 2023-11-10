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
    }
}, {
    timestamps: true,
    tableName: 'encuesta'
})