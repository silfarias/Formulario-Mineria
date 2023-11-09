import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import { conectarBD } from './src/config/relations.js';


const app = express()
const PORT = process.env.PORT || 3000

app.use(cors())
app.use(helmet())
app.use(express.json())
app.use(morgan('dev'))

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(PORT, async () => {
    await conectarBD()
    console.log(`Servidor corriendo en http://localhost:${PORT}`)
})