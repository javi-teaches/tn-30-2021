const express = require("express");
const path = require("path");
const methodOverride = require("method-override");

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(methodOverride());
app.use(express.static(path.resolve(__dirname, "public")));

app.listen(3000, () => console.log("Servidor levantado en el puerto 3000"));

// Template Engine
app.set("view engine", "ejs");

// Routers
const productsRouter = require("./routes/products");
app.use("/products", productsRouter);

app.get("/", (req, res) => res.redirect("/products"));