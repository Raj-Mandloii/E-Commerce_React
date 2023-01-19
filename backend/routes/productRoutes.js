const express = require("express");
const { createProduct, getProduct, getAllProduct } = require("../controller/productController");

const router = express.Router();

router.post('/', createProduct)
router.get('/:id', getProduct)
router.get('/', getAllProduct)

module.exports = router;
