// backend/controllers/promocion.controller.js
import { Promocion } from "./models/promocion.model.js"; 

export const testpromocion = () => {
    console.log("Llamando la función desde el controlador de Promocion");
};

// Crear una promoción de prueba
Promocion.create({
    nombre: 'Descuento de Verano',
    descripcion: '20% de descuento en todos lo vehiculos',
    descuento: 20,
    fechaInicio: new Date('2024-06-01'),
    fechaFin: new Date('2024-08-31')
});
