// models/persona.model.js
import { Schema, model } from 'mongoose';

const NominaSchema = new Schema({
    nombre: {
        type: String,
        required: true
    },
   
    puesto: {
        type: String,
        required: true
    },
    salario: {
        type: Number,
        required: true
    }
    
});

export const Nomina = model('Nomina', NominaSchema);

