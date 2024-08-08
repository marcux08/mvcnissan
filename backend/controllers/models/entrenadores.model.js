import { Schema, model } from 'mongoose';

const enttecSchema = new Schema({
    nombre: {
        type: String,
        required: true
    },
    apepat: {
        type: String,
        required: true
    },
    apemat: {
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

export const Entrenador = model('Entrenador', enttecSchema);
