import { sequelize } from "../config/database.js";
import { DataTypes } from "sequelize";

export const Respuesta1 = sequelize.define("respuesta1", {
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
    tableName: "respuesta1"
})


/* const respuesta1 = [
    { id: 1, detalle_respuesta: "Mañana", id_pregunta: 1},
    { id: 2, detalle_respuesta: "Tarde", id_pregunta: 1},
    { id: 3, detalle_respuesta: "Noche", id_pregunta: 1} 
]

Respuesta1.bulkCreate(respuesta1)
.then(() => {
    console.log("Respuestas insertadas")
})
.catch((error) => {
    console.log(error)
}) */