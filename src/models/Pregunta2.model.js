import { sequelize } from "../config/database.js";
import { DataTypes } from "sequelize";

export const Pregunta2 = sequelize.define("pregunta2", {
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
    tableName: "pregunta2"
})

/* const pregunta2 = [
    { id: 1, respuesta: "Tutorias"},
    { id: 2, respuesta: "Bibliotecas"},
    { id: 3, respuesta: "Laboratorios"},
    { id: 4, respuesta: "Grupos de estudio"}
]

Pregunta2.bulkCreate(pregunta2)
.then(() => {
    console.log("Preguntas insertadas")
})
.catch((error) => {
    console.log(error)
}) */