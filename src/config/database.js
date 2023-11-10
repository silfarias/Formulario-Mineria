import { Sequelize } from "sequelize";
import 'dotenv/config';

export const sequelize = new Sequelize(
    process.env.DB_NAME || 'uni_encuesta',
    process.env.DB_USER || 'root',
    process.env.DB_PASSWORD || '',
    {
        host: process.env.DB_HOST || 'localhost',
        dialect: process.env.DB_DIALECT || 'mysql',
        port: process.env.DB_PORT || 3306
    } 
);

export async function connectDB () {
    try {
        await sequelize.sync({ alter: true });
        console.log('Base de datos conectada');
    } catch (err) {
        console.error(err);
    }
}