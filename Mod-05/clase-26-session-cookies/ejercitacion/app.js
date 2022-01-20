const express = require('express');
const session = require('express-session');

const app = express();

app.listen(5555, () => console.log("Server runing in 5555 port"));

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(session({
	secret: "Lo que sea",
	resave: false,
	saveUninitialized: true
}));

app.get("/", (req, res) => {
	return res.render("index");
})

app.post("/", (req, res) => {
	req.session.data = {
		nombre: req.body.nombre,
		email: req.body.email,
		edad: req.body.edad,
		color: req.body.color,
	}
	return res.redirect("/show");
})

app.get("/show", (req, res) => {
	return res.render("show", {
		data: req.session.data
	});
})