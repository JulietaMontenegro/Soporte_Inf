const express= require("express");
const path=require("path");
const app=express();
const mysql = require('mysql')

app.listen('3000', function(){
    console.log('iniciada en el puerto 3000')
})
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const views = path.join(__dirname, "vistas")
app.use(express.static(views));

const imagenes=path.join(__dirname, "imagenes")
app.use(express.static(imagenes));

const src = path.join(__dirname, "src")
app.use(express.static(src));

app.get('/inicio', function(req, res){
    res.sendFile(path.join(views,"index.html"))
})
app.get('/formulario', function(req, res){
res.sendFile(path.join(views,"forms.html"))
})


const connection = mysql.createConnection({
    host: 'localhost',
    user: 'alumno',
    password: 'alumnoipm',
    database: 'mydb',
  })
  connection.connect(function(err){
    if(err) throw err;

    console.log('Conectado');
  })

  app.post('/insertar', function (req , res){
    console.log(req.body);
    var mysql= "insert into table1 values(NULL, '"+req.body.nombre+"','"+req.body.apellido+"','"+req.body.cantante+"','"+req.body.correo+"');"
    connection.query(mysql, function(err){
        if(err) throw err;
    })
    connection.end();
  })
