//defino controlador para el manejo de CRUD
const transaccionCtrl = require('./../controllers/transaccion.controller');
//creamos el manejador de rutas
const express = require('express');
const router = express.Router();
//definimos las rutas para la gestion de producto
router.get('/', transaccionCtrl.getTransacciones); // todos las transacciones
router.post('/', transaccionCtrl.createTransaccion);  // crear
router.get('/email', transaccionCtrl.getTransaccionesCliente); // por email
router.get('/divisa', transaccionCtrl.getTransaccionesDivisas);  // por divisa
//exportamos el modulo de rutas
module.exports = router;