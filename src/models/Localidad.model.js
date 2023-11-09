import { sequelize } from "../config/database.js";
import { DataTypes } from "sequelize";

export const Localidad = sequelize.define("localidad", {
    id_localidad: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    }
    
}, {
    timestamps: true,
    tableName: "localidad"
})