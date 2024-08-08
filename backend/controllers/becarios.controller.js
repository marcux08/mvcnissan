import { Becario} from './models/empbecarios.model.js';

export const testbecario = () => {
    console.log("Llamando la función desde el controlador");
};

// Crear un empleado de prueba
Becario.create({
    nombre: 'Ana',
    apepat: 'Hernandez',
    apemat: 'Lopez',
    puesto: 'Cajera',
    salario: 5000,
    fechaContratacion: new Date('2023-05-10')
});