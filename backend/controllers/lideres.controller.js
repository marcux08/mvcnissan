import { Lider } from "./models/lideres.model.js";

export const testlider = () => {
    console.log("Llamando la función desde el controlador");
};

// Crear un gerente de prueba
Lider.create({
    nombre: 'Juan',
    
    puesto: 'Gerente de tienda',
    salario: 50000,
    fechaContratacion: new Date('2022-03-01')
});
