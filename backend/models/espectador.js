const mongoose = require('mongoose');
const {Schema} = mongoose;
const EspectadorSchema = new Schema({
 nombre: {type:String, required: true},
 apellido: {type:String, required: true},
 dni: {type: String, required:true},
 email: {type: String, required: true}
})
module.exports = mongoose.models.Espectador || mongoose.model('Espectador', EspectadorSchema);