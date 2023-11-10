import { Encuesta } from "../models/Encuesta.model.js";

export const crearEncuesta = async (req, res) => {
    try {
        const {
            edad,
            id_genero,
            id_localidad,
            respuesta1,
            respuesta2,
            respuesta3,
            respuesta4,
            respuesta5,
            respuesta6,
            respuesta7,
            respuesta8,
            respuesta9,
            respuesta10,
            respuesta11,
            respuesta12
        } = req.body;

        const newEncuesta = new Encuesta({
            edad,
            id_genero,
            id_localidad,
            respuesta1,
            respuesta2,
            respuesta3,
            respuesta4,
            respuesta5,
            respuesta6,
            respuesta7,
            respuesta8,
            respuesta9,
            respuesta10,
            respuesta11,
            respuesta12
        })
        await newEncuesta.save()

        res.status(201).json({ message: 'Encuesta registrada', newEncuesta })
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'Error interno del servidor', error })
    }
}
