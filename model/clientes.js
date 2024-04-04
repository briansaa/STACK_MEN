const mongoose=require('mongoose')
const Schema = mongoose.Schema

const ClienteSchema = new Schema({
    nombre:String,
    apellido:String,
    direccion:String
     }, {versionKey:false})

     module.exports = mongoose('clientes', ClienteSchema)