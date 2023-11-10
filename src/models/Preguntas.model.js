import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";

export const Preguntas = sequelize.define("preguntas", {
    id_pregunta: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    detalle_pregunta: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    timestamps: true,
    tableName: "preguntas"
})

/* const preguntas = [
    { id_pregunta: 1, detalle_pregunta: "¿Qué tipo de horario preferirías para tus clases?"},
    { id_pregunta: 2, detalle_pregunta: "¿Qué tipo de recursos de apoyo académico consideras más importante?"},
    { id_pregunta: 3, detalle_pregunta: "¿Cómo calificarías la comunicación y el apoyo de tus profesores?"},
    { id_pregunta: 4, detalle_pregunta: "¿Recomendarías nuestra universidad a otros estudiantes?"},
    { id_pregunta: 5, detalle_pregunta: "¿Que carrera estás cursando?"},
    { id_pregunta: 6, detalle_pregunta: "¿Qué materia te gustaría agregar a tu carrera?"},
    { id_pregunta: 7, detalle_pregunta: "¿Estás conforme con el contenido de cada materia?"},
    { id_pregunta: 8, detalle_pregunta: "¿Qué materia de las que cursas actualmente te parece innecesaria?"}
]

Preguntas.bulkCreate(preguntas)
.then(() => {
    console.log("Preguntas insertadas")
})
.catch((error) => {
    console.log(error)
}) */