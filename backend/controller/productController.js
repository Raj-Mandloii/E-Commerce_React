const ProductModel = require("../models/productModel");
const asyncHandler = require("express-async-handler");

// we can modify any field
const slugify = require("slugify");

// Creating a product
const createProduct = asyncHandler(async (req, res) => {
  console.log("Creating product")
  try {
    if (req.body.title) {
      req.body.slug = slugify(req.body.title);
    }
    const newProd = new ProductModel(req.body);
    console.log("Product", newProd)
    await newProd.save();

    res.json(newProd);
  } catch (e) {
    throw new Error(e);
  }
});

// TO get a single product
const getProduct = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const findProduct = await ProductModel.findById(id);
    res.json(findProduct);
  } catch (e) {
    throw new Error(e);
  }
});

//TO get all products
const getAllProduct = asyncHandler(async (req, res) => {
  try {
    const allProduct = await ProductModel.find();
    res.json(allProduct);
  } catch (e) {
    throw new Error(e);
  }
});

// To update a product

const updateProduct = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    if (req.body.title) {
      req.body.slug = slugify(req.body.title);
    }
    const updateProduct = await ProductModel.findOneAndUpdate(
      { id },
      req.body,
      {
        new: true,
      }
    );
    res.json(updateProduct);
  } catch (e) {
    throw new Error(e);
  }
});

// Delete a product
const deleteProduct = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const deleteProd = await ProductModel.findOneAndDelete({ id });
    res.json(deleteProd);
  } catch (e) {
    throw new Error(e);
  }
});

module.exports = {
  createProduct,
  getProduct,
  getAllProduct,
  updateProduct,
  deleteProduct,
};
