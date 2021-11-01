const mongoose = require("mongoose");

let PersonaSchema=new mongoose.Schema({
    tipoDocumento: String,
    documento: Number,
    nombres: String,
    apellidos: String,
    direccion: String,
    correo: String,
    telefonoFijo: Number,
    telefonoCelular: Number,
    enlace: String,
    descripcionPerfil: String
});

module.exports=mongoose.model("tarea",PersonaSchema,"Tareas");