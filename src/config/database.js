import { Sequelize } from "sequelize";
import 'dotenv/config';

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        dialect: process.env.DB_DIALECT 
})

export const conectarBD = async () => {
    try {
        await sequelize.authenticate();
        console.log('Conexión establecida correctamente');
    }
    catch (error) {
        console.error('No se pudo conectar a la base de datos: ', error);
        process.exit(1);
    }
}