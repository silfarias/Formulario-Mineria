import { Localidad } from '../models/Localidad.model.js'
import { Genero } from '../models/Genero.model.js'
import { Encuesta } from '../models/Encuesta.model.js'
import { Preguntas } from '../models/Preguntas.model.js'
import { Respuesta1 } from '../models/Respuesta1.model.js'
import { Respuesta2 } from '../models/Respuesta2.model.js'
import { Respuesta3 } from '../models/Respuesta3.model.js'
import { Respuesta4 } from '../models/Respuesta4.model.js'


export const relations = () => {
    try {
        Genero.hasMany(Encuesta, { foreignKey: 'id_genero' });
        Encuesta.belongsTo(Genero, { foreignKey: 'id_genero' });
    
        Localidad.hasMany(Encuesta, { foreignKey: 'id_localidad' });
        Encuesta.belongsTo(Localidad, { foreignKey: 'id_localidad' });

        Preguntas.hasMany(Encuesta, { foreignKey: 'id_preguntas' });
        Encuesta.belongsTo(Preguntas, { foreignKey: 'id_preguntas' });

        Preguntas.hasMany(Respuesta1, {foreignKey: 'id_pregunta'});
        Preguntas.hasMany(Respuesta2, {foreignKey: 'id_pregunta'});
        Preguntas.hasMany(Respuesta3, {foreignKey: 'id_pregunta'});
        Preguntas.hasMany(Respuesta4, {foreignKey: 'id_pregunta'});
        
    } catch (error) {
        console.log(error)
    }
}