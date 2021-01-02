const express = require ('express');
const path = require('path');

const app = express();

//Settings (configurar modulos, puertos, rutas, etc)
app.set('port', process.env.PORT || 5000);
app.use(express.static(path.join(__dirname,'public')));
app.use(express.json());

//Middlewares
app.use(express.urlencoded({extended:false}));

//Routes
app.use(require('./routes/index'));

//Static Files
//app.use(express.static(path.join(__dirname,'public')));

module.exports = app;