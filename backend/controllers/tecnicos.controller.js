import { Tecnico } from "./models/enttec.model.js"; 

export const testtecnico = () => {
    console.log("Llamando la función desde el controlador");
};

// Crear un gerente de prueba
Tecnico.create({
    nombre: 'carlos',
    apepat: 'novoa',
    apemat: 'Martinez',
    puesto: 'detallado',
    salario: 16000,
    fechaContratacion: new Date('2021-03-01')
});