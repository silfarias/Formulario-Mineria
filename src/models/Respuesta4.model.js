import { sequelize } from "../config/database.js";
import { DataTypes } from "sequelize";

export const Respuesta4 = sequelize.define("respuesta4", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    detalle_respuesta: {
        type: DataTypes.STRING,
        allowNull: false
    },
    id_pregunta: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    timestamps: true,
    tableName: "respuesta4"
})

/* const respuesta4 = [
    { id: 1, detalle_respuesta: "Desarrollo de Software Multiplataforma", id_pregunta: 5},
    { id: 2, detalle_respuesta: "Mecatrónica", id_pregunta: 5},
    { id: 3, detalle_respuesta: "Telecomunicaciones", id_pregunta: 5},
    { id: 4, detalle_respuesta: "Quimica Industrial", id_pregunta: 5}
]

Respuesta4.bulkCreate(respuesta4)
.then(() => {
    console.log("Respuestas insertadas")
})
.catch((error) => {
    console.log(error)
}) */