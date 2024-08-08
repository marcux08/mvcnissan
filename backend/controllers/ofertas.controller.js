// backend/controllers/promocion.controller.js
import { Oferta } from "./models/oferprom.model.js"; 

export const testofertas = () => {
    console.log("Llamando la función desde el controlador de Promocion");
};

// Crear una promoción de prueba
Oferta.create({
    nombre: 'Descuento por cumpleaños',
    descripcion: '10% de descuento en todos lo vehiculos',
    descuento: 10,
    fechaInicio: new Date('2023-06-01'),
    fechaFin: new Date('2024-08-31')
});
