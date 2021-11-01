// console.log("Hola mundo");

const express = require("express");
const mongoose = require("mongoose");
const PersonaSchema = require("./models/Persona.js");

const app = express();
const router = express.Router();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


//Conexión a BD
mongoose.connect("mongodb+srv://dbUser:12345@cluster0.06thz.mongodb.net/BDNodeJS?retryWrites=true&w=majority");


//CRUD
router.get("/", (req, res) => {
    res.send("<h1>Hola mundo!!!</h1>");
});

router.get("/persona", (req, res) => {
    PersonaSchema.find(function(err, datos){
        if(err){
            console.log("Error leyendo Persona");
        }else{
            res.send(datos);
        }
    });
});

router.delete("/persona", (req, res) => {
    PersonaSchema.deleteOne({ documento: '75105688' }, function (err) {
        if(err){
            console.log("Error borrando Persona");
        }else{
            res.send("Persona eliminada correctamente");
        }
      });
});

router.post("/persona", (req, res) => {
    let nuevaPersona = new PersonaSchema({
        tipoDocumento: req.body.tipodoc,
        documento: req.body.documento,
        nombres: req.body.nombres,
        apellidos: req.body.apellidos,
        direccion: req.body.direccion,
        correo: req.body.correo,
        telefonoFijo: req.body.fijo,
        telefonoCelular: req.body.celular,
        enlace: req.body.enlace,
        descripcionPerfil: req.body.descripcion
    });

    nuevaPersona.save(function (err, datos) {
        if (err) {
            console.log(err);
        } else {
            res.send("Persona almacenada correctamente");
        }
    });
});





app.use(router);
app.listen(3000, () => {
    console.log("Servidor de prueba nodejs por el puerto 3000");
});