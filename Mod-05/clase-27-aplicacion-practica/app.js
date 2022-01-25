const express = require('express');
const path = require('path');
const session = require('express-session');
const cookie = require('cookie-parser');

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(path.resolve(__dirname, 'public')));

app.use(session({ 
	secret: 'Un lindo gatito',
	resave: false,
	saveUninitialized: true,
}));

app.listen(3000, () => console.log('Servidor levantado en el puerto 3000'));

// Template Engine
app.set('view engine', 'ejs');

// Cookie MD
app.use(cookie());

// MD auto login
const autoLogin = require("./middlewares/autoLoginMiddleware");
app.use(autoLogin);

// MD userLogged
const userLoggedMD = require("./middlewares/userLoggedMiddleware");
app.use(userLoggedMD);

// Routers
const mainRoutes = require('./routes/mainRoutes');
const userRoutes = require('./routes/userRoutes');

app.use('/', mainRoutes);
app.use('/user', userRoutes);