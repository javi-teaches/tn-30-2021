const express = require("express");
const router = express.Router();

// Controller
const controller = require("../controllers/products");

router.get("/", controller.index);

router.get("/create", controller.create);

router.get("/:id", controller.detail);

router.post("/", controller.store);

router.delete("/:id", controller.delete);

module.exports = router;