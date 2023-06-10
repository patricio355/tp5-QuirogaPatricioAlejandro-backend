//defino controlador para el manejo de CRUD
const productoCtrl = require('./../controllers/producto.controller');
//creamos el manejador de rutas
const express = require('express');
const router = express.Router();
//definimos las rutas para la gestion de producto
router.get('/', productoCtrl.getProductos); // todos los productos
router.post('/', productoCtrl.createProducto);  // crea un producto
router.get('/destacados', productoCtrl.getDestacados); // productos destacados
router.put('/:id', productoCtrl.editProducto); // edita un producto
router.delete('/:id', productoCtrl.deleteProducto);  // elimina un producto
//exportamos el modulo de rutas
module.exports = router;