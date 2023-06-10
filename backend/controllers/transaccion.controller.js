const Transaccion = require('../models/transaccion');
const transaccionCtrl = {}

//recuperar todas las transacciones
transaccionCtrl.getTransacciones = async (req, res) => {
    try {
      const transacciones = await Transaccion.find();
      res.json(transacciones);
    } catch (error) {
      res.status(500).json({ error: 'Error al recuperar las transacciones.' });
    }
  };
  
//recuperar el historico de un cliente por el email
transaccionCtrl.getTransaccionesCliente = async (req, res) => {
    const email = req.query.email;
    var transaccion = await Transaccion.find({ emailCliente: email});
    res.json(transaccion);
    }


//dar de alta una transaccion
transaccionCtrl.createTransaccion = async (req, res) => {
var transaccion = new Transaccion(req.body);
// console.log(transaccion);
try {
await transaccion.save();
res.json({
'status': '1',
'msg': 'Transaccion guardada.'})
} catch (error) {
res.status(400).json({
'status': '0',
'msg': 'Error procesando operacion.'})
}
}
//recuperar por divisas
transaccionCtrl.getTransaccionesDivisas = async (req, res) => {
    const origen = req.query.origen; // Obtén el valor del parámetro 'origen'
    const destino = req.query.destino; // Obtén el valor del parámetro 'destino'

    var transaccion = await Transaccion.find({ monedaOrigen: origen, monedaDestino: destino });
    res.json(transaccion);
    }

module.exports = transaccionCtrl;