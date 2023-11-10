import { sequelize } from "../config/database.js";
import { DataTypes } from "sequelize";

export const Materias = sequelize.define("materias", {
    id_materia: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
}, {
    timestamps: true,
    tableName: "materias"
})

/* const materias = [
    { id_materia: 1, nombre: "Matematicas" },
    { id_materia: 2, nombre: "Inglés" },
    { id_materia: 3, nombre: "Base de Datos" },
    { id_materia: 4, nombre: "Arquitectura y Sistemas Operativos" },
    { id_materia: 5, nombre: "Taller de Integración" },
    { id_materia: 6, nombre: "Tecnología y Sociedad" },
    { id_materia: 7, nombre: "Algoritmo y Estructura de Datos" },  
    { id_materia: 8, nombre: "Ingeniería de Software" },
    { id_materia: 9, nombre: "Minería de Datos" },
    { id_materia: 10, nombre: "Taller de Lenguajes de Programación" },
    { id_materia: 11, nombre: "Orientación en Valores y Motivación" } 
]

Materias.bulkCreate(materias)
.then(() => {
    console.log("Materias insertadas")
})
.catch((error) => {
    console.log(error)
}) */
