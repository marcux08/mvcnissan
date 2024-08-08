import { Empleado } from './models/empbecarios.model.js';

export const testempleado = () => {
    console.log("Llamando la función desde el controlador");
};

// Crear un gerente de prueba
Empleado.create({
    nombre: 'Juan',
    apepat: 'Perez',
    apemat: 'Martinez',
    puesto: 'Gerente de tienda',
    salario: 12000,
    fechaContratacion: new Date('2022-03-01')
});