import { sequelize } from "../config/database.js";
import { DataTypes } from "sequelize";

export const Pregunta1 = sequelize.define("pregunta1", {
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
    tableName: "pregunta1"
})


/* const pregunta1 = [
    { id: 1, respuesta: "Mañana"},
    { id: 2, respuesta: "Tarde"},
    { id: 3, respuesta: "Noche"} 
]

Pregunta1.bulkCreate(pregunta1)
.then(() => {
    console.log("Preguntas insertadas")
})
.catch((error) => {
    console.log(error)
}) */