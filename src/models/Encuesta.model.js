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
    id_respuesta1: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    id_respuesta2: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    id_respuesta3: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    id_respuesta4: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    respuesta5: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    respuesta6: {
        type: DataTypes.STRING,
        allowNull: false
    },
    respuesta7: {
        type: DataTypes.STRING,
        allowNull: false
    },
    respuesta8: {
        type: DataTypes.STRING,
        allowNull: false
    },
    respuesta9: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    timestamps: true,
    tableName: 'encuesta'
})