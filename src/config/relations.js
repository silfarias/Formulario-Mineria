import { Localidad } from '../models/Localidad.model.js'
import { Genero } from '../models/Genero.model.js'
import { Encuesta } from '../models/Encuesta.model.js'
import { Preguntas } from '../models/Preguntas.model.js'
import { Materias } from '../models/Materias.model.js'


export const relations = () => {
    try {
        Genero.hasMany(Encuesta, { foreignKey: 'id_genero' });
        Encuesta.belongsTo(Genero, { foreignKey: 'id_genero' });
    
        Localidad.hasMany(Encuesta, { foreignKey: 'id_localidad' });
        Encuesta.belongsTo(Localidad, { foreignKey: 'id_localidad' });

        Materias.hasMany(Encuesta, { foreignKey: 'id_materia' });
        Encuesta.belongsTo(Materias, { foreignKey: 'id_materia' });
        
    } catch (error) {
        console.log(error)
    }
}