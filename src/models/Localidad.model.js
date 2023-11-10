import { sequelize } from "../config/database.js";
import { DataTypes } from "sequelize";

export const Localidad = sequelize.define("localidad", {
    id_localidad: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    timestamps: true,
    tableName: "localidad"
})

/* const localidades = [
    { id_localidad: 1, nombre: 'Formosa' },
    { id_localidad: 2, nombre: 'Clorinda' },
    { id_localidad: 3, nombre: 'El Colorado' },
    { id_localidad: 4, nombre: 'Ingeniero Juarez' },
    { id_localidad: 5, nombre: 'Laguna Blanca' },
    { id_localidad: 6, nombre: 'Piraré' },
    { id_localidad: 7, nombre: 'Mayor Villafañe' },
    { id_localidad: 8, nombre: 'Las Lomitas' },
    { id_localidad: 9, nombre: 'General Manuel Gelgrano' },
    { id_localidad: 10, nombre: 'Laishí' },
]

Localidad.bulkCreate(localidades)
    .then(() => {
        console.log("Localidades insertadas")
    })
    .catch((error) => {
        console.log(error)
    })
 */