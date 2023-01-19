const ProductModel = require("../models/productModel");
const asyncHandler = require("express-async-handler");

const createProduct = asyncHandler(async (req, res) => {
  try {
    const newProd = new ProductModel(req.body);
    await newProd.save();

    res.json(newProd);
  } catch (e) {
    throw new Error(e);
  }
});

const getProduct = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const findProduct = await ProductModel.findById(id);
    res.json(findProduct);
  } catch (e) {
    throw new Error(e);
  }
});

const getAllProduct = asyncHandler(async (req, res) => {
  try {
    const allProduct = await ProductModel.find();
    res.json(allProduct);
  } catch (e) {
    throw new Error(e);
  }
});

module.exports = { createProduct, getProduct,getAllProduct };
