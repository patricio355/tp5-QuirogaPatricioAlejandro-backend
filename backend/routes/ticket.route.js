//defino controlador para el manejo de CRUD
const ticketCtrl = require('./../controllers/ticket.controller');
//creamos el manejador de rutas
const express = require('express');
const router = express.Router();
//definimos las rutas para la gestion de producto
router.get('/', ticketCtrl.getTickets); // todos los tickets
router.get('/categoria', ticketCtrl.getTicketsCategoria); // por categoria
router.get('/:id', ticketCtrl.getTicket); // un ticket
router.post('/', ticketCtrl.createTicket);  // crea un ticket
router.put('/:id', ticketCtrl.editTicket); // edita un ticket
router.delete('/:id', ticketCtrl.deleteTicket);  // elimina un ticket

//exportamos el modulo de rutas
module.exports = router;



