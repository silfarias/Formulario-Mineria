//Middlewares
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import path from 'path';


//Base de Datos
import { connectDB } from './src/config/database.js';
import { relations } from './src/config/relations.js';



import { encuestaRouter } from './src/routers/encuesta.routes.js';


//Archivos estaticos
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


//Servidor
const app = express()
const PORT = process.env.PORT || 3000


app.use(cors())
app.use(helmet())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan('dev'))


app.use(express.static(path.join(__dirname, 'public')));


//Guardar un registro de encuesta en la base de datos
app.post("/record", encuestaRouter);

app.listen(PORT, async () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`)
    relations()
    connectDB()
});