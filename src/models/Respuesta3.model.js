import { sequelize } from "../config/database.js";
import { DataTypes } from "sequelize";

export const Respuesta3 = sequelize.define("respuesta3", {
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
    tableName: "respuesta3"
})

/* const respuesta3 = [
    { id: 1, detalle_respuesta: "Excelente", id_pregunta: 3},
    { id: 2, detalle_respuesta: "Bueno", id_pregunta: 3},
    { id: 3, detalle_respuesta: "Aceptable", id_pregunta: 3},
    { id: 4, detalle_respuesta: "Necesita Mejorar", id_pregunta: 3}
]

Respuesta3.bulkCreate(respuesta3)
.then(() => {
    console.log("Respuestas insertadas")
})
.catch((error) => {
    console.log(error)
}) */