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
    { id_pregunta: 1, detalle_pregunta: "Del 1 al 10 ¿Como calificarias nuestro Instituto Politecnico?"},

    { id_pregunta: 2, detalle_pregunta: "¿Recomendarias nuestro Instituto a otros Estudiantes?"},

    { id_pregunta: 3, detalle_pregunta: "¿Qué tan satisfecho estas con las materias que brinda el Instituto?"},

    { id_pregunta: 4, detalle_pregunta: "¿Qué materia consideras que te brinda el mejor contenido? "},

    { id_pregunta: 5, detalle_pregunta: "¿Qué materia consideras que tiene los mejores Profesores?"},

    { id_pregunta: 6, detalle_pregunta: "¿Cual es la materia de la cual aprendiste más?"},

    { id_pregunta: 7, detalle_pregunta: "¿Cual es la materia que tiene los peores Profesores?"},

    { id_pregunta: 8, detalle_pregunta: "¿Cual es la materia de la que menos aprendiste?"},

    { id_pregunta: 9, detalle_pregunta: "¿Como te gustaria que sea el cursado?"},

    { id_pregunta:10, detalle_pregunta: "Si pudieras elegir un turno de cursado ¿Cual sería?"},

    { id_pregunta: 11, detalle_pregunta: "Si tuvieras que definir esta Tecnicatura con una palabra ¿Cual sería?"},

    { id_pregunta: 12, detalle_pregunta: "¿Tenes alguna sugerencia para esta Tecnicatura?"}
]

Preguntas.bulkCreate(preguntas)
.then(() => {
    console.log("Preguntas insertadas")
})
.catch((error) => {
    console.log(error)
}) */