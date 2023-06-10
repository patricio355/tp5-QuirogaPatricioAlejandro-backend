//defino controlador para el manejo de CRUD
const espectadorCtrl = require('./../controllers/espectador.controller');
//creamos el manejador de rutas
const express = require('express');
const router = express.Router();
//definimos las rutas para la gestion de producto
router.get('/', espectadorCtrl.getEspectadores); // todos los espectadores
router.post('/', espectadorCtrl.createEspectador);  // dar de alta espectador
router.get('/:id', espectadorCtrl.getEspectador); // obtener un espectador

//exportamos el modulo de rutas
module.exports = router;