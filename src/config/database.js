import { Sequelize } from "sequelize";

export const sequelize = new Sequelize(
    'uni_encuesta', 
    'postgres', 
    '46154094', {
    host: 'localhost',
    dialect: 'postgres'
});