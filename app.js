import mongoose from 'mongoose';
import cors from 'cors';
import express from 'express';
import dotenv from 'dotenv';
import { testbecario } from './backend/controllers/becarios.controller.js';
import { testempleado } from './backend/controllers/empleados.controller.js';
import { testentrenador } from './backend/controllers/entrenadores.controller.js';
import { testlider } from './backend/controllers/lideres.controller.js';
import { testnomina } from './backend/controllers/nomina.controller.js';
import { testofertas } from './backend/controllers/ofertas.controller.js';
import { testpromocion } from './backend/controllers/promociones.controller.js';
import { testtecnico } from './backend/controllers/tecnicos.controller.js';
dotenv .config();
//importaciones de librerias las cuales nos va a servir para desarrollar el proyecto
mongoose.connect(process.env.urldb)




.then(()=>{
    console.log('sis')
})
.catch((err)=>{
    console.log('nel')
})


const app = express();
app.use(cors())
app.listen(4001,()=>{
    console.log("esta funcionando correctamente el servidor")
})
testbecario()
testempleado()
testentrenador()
testlider()
testnomina()
testofertas()
testpromocion()
testtecnico()