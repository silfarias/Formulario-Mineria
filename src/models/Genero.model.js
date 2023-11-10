import { sequelize } from "../config/database.js";
import { DataTypes } from "sequelize";

export const Genero = sequelize.define("genero", {
    id_genero: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
}, {
    timestamps: false,
    tableName: 'genero'
})

/* const generos = [
    { id_genero: 1, nombre: "Femenino" },
    { id_genero: 2, nombre: "Masculino" },
    { id_genero: 3, nombre: "Otro" }
]

Genero.bulkCreate(generos)
.then(() => {
    console.log("Generos insertadas")
})
.catch((error) => {
    console.log(error)
}) */