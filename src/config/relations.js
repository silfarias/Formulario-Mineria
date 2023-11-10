import { Localidad } from '../models/Localidad.model.js'
import { Genero } from '../models/Genero.model.js'
import { Encuesta } from '../models/Encuesta.model.js'
import { Preguntas } from '../models/Preguntas.model.js'
import { Pregunta1 } from '../models/Pregunta1.model.js'
import { Pregunta2 } from '../models/Pregunta2.model.js'
import { Pregunta3 } from '../models/Pregunta3.model.js'
import { Pregunta4 } from '../models/Pregunta4.model.js'

export const relations = () => {
    try {
        Genero.hasMany(Encuesta, { foreignKey: 'id_genero' });
        Encuesta.belongsTo(Genero, { foreignKey: 'id_genero' });
    
        Localidad.hasMany(Encuesta, { foreignKey: 'id_localidad' });
        Encuesta.belongsTo(Localidad, { foreignKey: 'id_localidad' });

        Preguntas.hasMany(Encuesta, { foreignKey: 'id_preguntas' });
        Encuesta.belongsTo(Preguntas, { foreignKey: 'id_preguntas' });
        
    } catch (error) {
        console.log(error)
    }
}