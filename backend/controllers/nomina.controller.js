// controllers/gerente.controller.js
import { Nomina } from "./models/nomina.model.js"; 

export const testnomina = () => {
    console.log("Llamando la función desde el controlador");
};

// Crear un gerente de prueba
Nomina.create({
    nombre: 'Juan',
    puesto: 'Gerente de tienda',
    salario: 12000
    
});
