import { sequelize } from "../config/database.js";
import { DataTypes } from "sequelize";

export const Respuesta2 = sequelize.define("respuesta2", {
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
    tableName: "respuesta2"
})

/* const respuesta2 = [
    { id: 1, detalle_respuesta: "Tutorias", id_pregunta: 2},
    { id: 2, detalle_respuesta: "Bibliotecas", id_pregunta: 2},
    { id: 3, detalle_respuesta: "Laboratorios", id_pregunta: 2},
    { id: 4, detalle_respuesta: "Grupos de estudio", id_pregunta: 2}
]

Respuesta2.bulkCreate(respuesta2)
.then(() => {
    console.log("Respuestas insertadas")
})
.catch((error) => {
    console.log(error)
}) */