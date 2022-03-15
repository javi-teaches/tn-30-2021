const express = require("express");
const path = require("path");
const methodOverride = require("method-override");

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(methodOverride("_method"));
app.use(express.static(path.resolve(__dirname, "public")));

const PORT = process.argv[2]?.toString() || 3000;

app.listen(PORT, () => console.log(`App running in port: ${PORT}`));

// Template Engine
app.set("view engine", "ejs");

// Routers
const productsRouter = require("./routes/products");
app.use("/products", productsRouter);

app.get("/register", (req, res) => {
	return res.render("register");
})

app.get("/", (req, res) => res.redirect("/products"));

