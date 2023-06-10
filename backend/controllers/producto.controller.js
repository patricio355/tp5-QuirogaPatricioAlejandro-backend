const Producto = require('../models/producto');
const productoCtrl = {}

//recuperar todos los productos
productoCtrl.getProductos = async (req, res) => {
var productos = await Producto.find();
res.json(productos);
}

//recuperar destacados
productoCtrl.getDestacados = async (req, res) => {
    var productos = await Producto.find({ destacado: true }); // Filtra 
    res.json(productos);
  };



//dar de alta un producto
productoCtrl.createProducto = async (req, res) => {
var producto = new Producto(req.body);
try {
await producto.save();
res.json({
'status': '1',
'msg': 'Producto guardado.'})
} catch (error) {
res.status(400).json({
'status': '0',
'msg': 'Error procesando operacion.'})
}
}


productoCtrl.getProducto = async (req, res) => {
const producto = await Producto.findById(req.params.id);
res.json(producto);
}

//editar producto
productoCtrl.editProducto = async (req, res) => {
const vproducto = new Producto(req.body);
try {
await Producto.updateOne({_id: req.body._id}, vproducto);
res.json({
'status': '1',
'msg': 'Producto actualizado'
})
} catch (error) {
res.status(400).json({
'status': '0',
'msg': 'Error procesando la operacion'
})
}
}

//eliminar un producto
productoCtrl.deleteProducto = async (req, res)=>{
try {
await Producto.deleteOne({_id: req.params.id});
res.json({
status: '1',
msg: 'Producto eliminado'
})
} catch (error) {
res.status(400).json({
'status': '0',
'msg': 'Error procesando la operacion'
})
}
}
module.exports = productoCtrl;