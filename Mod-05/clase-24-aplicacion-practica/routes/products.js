const path = require("path");
const express = require("express");
const router = express.Router();

// Multer
const multer = require("multer");

const diskStorage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, path.resolve(__dirname, '../public/uploads'));
	},
	filename: (req, file, cb) => {
		const finalName = `${Date.now()}_img${path.extname(file.originalname)}`;
		cb(null, finalName);
	}
});

const upload = multer({ 
	storage: diskStorage,
	fileFilter: (req, file, cb) => {
		const acceptedExtensions = [".jpg", ".png", ".jpeg", ".gif"];
		const fileExtension = path.extname(file.originalname).toLowerCase();
		if (acceptedExtensions.includes(fileExtension)) {
			cb(null, true);
		} else {
			return cb("Only .png, .jpg, .jpeg and .gif format allowed!");
		}
	}
});

// Controller
const controller = require("../controllers/products");

router.get("/", controller.index);

router.get("/create", controller.create);

router.get("/edit/:id", controller.edit);

router.get("/:id", controller.detail);

router.post("/", upload.single("image"), controller.store);

router.put("/:id", upload.single("image"), controller.update);

router.delete("/:id", controller.delete);

module.exports = router;