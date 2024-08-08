// models/persona.model.js
import { Schema, model } from 'mongoose';

const LiderSchema = new Schema({
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
    },
    fechaContratacion: {
        type: Date,
        default: Date.now
    }
});

export const Lider = model('Lider', LiderSchema);

