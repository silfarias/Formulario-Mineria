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
    respuesta1: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    respuesta2: {
        type: DataTypes.STRING,
        allowNull: false
    },
    respuesta3: {
        type: DataTypes.STRING,
        allowNull: false
    },
    respuesta4: {
        type: DataTypes.STRING,
        allowNull: false
    },
    respuesta5: {
        type: DataTypes.STRING,
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
    },
    respuesta10: {
        type: DataTypes.STRING,
        allowNull: false
    },
    respuesta11: {
        type: DataTypes.STRING,
        allowNull: false
    },
    respuesta12: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    timestamps: true,
    tableName: 'encuesta'
})