import { Encuesta } from "../models/Encuesta.model.js";

export const crearEncuesta = async (req, res) => {
    try {
        const { edad, id_genero, id_localidad,  } = req.body;
            
        const encuesta = await Encuesta.create({
            edad,
            id_genero,
            id_localidad,
            id_materia
        });

        res.status(201).json({ message: 'Encuesta Registrada exitosamente', encuesta});
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};
