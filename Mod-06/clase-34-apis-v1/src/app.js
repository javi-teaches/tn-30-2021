const express = require('express');
const path = require('path');
const methodOverride = require('method-override');

const app = express();

// URL encode  - Para que nos pueda llegar la información desde el formulario al req.body
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(express.static(path.resolve(__dirname, '../public')));

//Aquí estoy disponiendo la posibilidad para utilizar el seteo en los formularios para el usod e los metodos put ó delete
app.use(methodOverride('_method'));

//Aquí pueden colocar las rutas de las APIs
const apiRouter = require('./routes/api/api');
app.use("/api", apiRouter);

// view engine setup
app.set('views', path.resolve(__dirname, './views'));
app.set('view engine', 'ejs');


//Activando el servidor desde express
app.listen('3001', () => console.log('Servidor corriendo en el puerto 3001'));
