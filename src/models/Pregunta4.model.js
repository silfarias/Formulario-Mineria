import { sequelize } from "../config/database.js";
import { DataTypes } from "sequelize";

export const Pregunta4 = sequelize.define("pregunta4", {
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
    tableName: "pregunta4"
})

/* const pregunta4 = [
    { id: 1, respuesta: "Desarrollo de Software Multiplataforma"},
    { id: 2, respuesta: "Mecatrónica"},
    { id: 3, respuesta: "Telecomunicaciones"},
    { id: 4, respuesta: "Quimica Industrial"}
]

Pregunta4.bulkCreate(pregunta4)
.then(() => {
    console.log("Preguntas insertadas")
})
.catch((error) => {
    console.log(error)
}) */