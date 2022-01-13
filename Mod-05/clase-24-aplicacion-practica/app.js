const express = require("express");
const path = require("path");
const methodOverride = require("method-override");

const app = express();

app.listen(3000, () => console.log("Servidor corriendo en el puerto 3000"));

app.use(express.static(path.resolve(__dirname, "./public")));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(methodOverride('_method'));

app.set("view engine", "ejs");

const productsRouter = require('./routes/products');
app.use("/products", productsRouter);

app.get("/", (req, res) => res.redirect("/products"));
