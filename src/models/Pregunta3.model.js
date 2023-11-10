import { sequelize } from "../config/database.js";
import { DataTypes } from "sequelize";

export const Pregunta3 = sequelize.define("pregunta3", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    respuesta: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    timestamps: true,
    tableName: "pregunta3"
})

/* const pregunta3 = [
    { id: 1, respuesta: "Excelente"},
    { id: 2, respuesta: "Bueno"},
    { id: 3, respuesta: "Aceptable"},
    { id: 4, respuesta: "Necesita Mejorar"}
]

Pregunta3.bulkCreate(pregunta3)
.then(() => {
    console.log("Preguntas insertadas")
})
.catch((error) => {
    console.log(error)
}) */