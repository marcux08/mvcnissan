import { Entrenador } from "./models/entrenadores.model.js"; 

export const testentrenador = () => {
    console.log("Llamando la función desde el controlador");
};

// Crear un gerente de prueba
Entrenador.create({
    nombre: 'miguel',
    apepat: 'juarez',
    apemat: 'Martinez',
    puesto: 'maquinaria',
    salario: 25000,
    fechaContratacion: new Date('2022-03-01')
});