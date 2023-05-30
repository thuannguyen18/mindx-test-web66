const express = require('express');
const router = express.Router();

const productController = require("../controllers/product");
const verifyToken = require("../middleware/verifyToken");

router.get("/products", verifyToken, productController.getAllProducts);

module.exports = router;