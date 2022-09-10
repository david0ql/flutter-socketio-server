//Importacion de librerias
const express = require('express');
const path = require('path');
require("dotenv").config();

//Ap de Express
const app = express();

//Node Server
const server = require('http').createServer(app);
module.exports.io = require('socket.io')(server);

require('./sockets/socket');

//Definir path publico
const publicPath = path.resolve(__dirname, 'public');
app.use(express.static( publicPath ))
//Iniciar el servidor
server.listen(process.env.PORT, (e)=>{
    if (e) throw new Error(err);
    console.log(`Servidor corriendo en puerto `, process.env.PORT);
})