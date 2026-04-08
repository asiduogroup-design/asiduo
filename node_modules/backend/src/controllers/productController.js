const Product = require("../models/Product");
const AppError = require("../utils/appError");

const normalizeImages = (images) => {
  if (Array.isArray(images)) {
    return images;
  }

  if (typeof images === "string" && images.trim()) {
    return [images.trim()];
  }

  return [];
};

const getProducts = async (req, res, next) => {
  try {
    const { category, search } = req.query;
    const filters = {};

    if (category) {
      filters.category = category;
    }

    if (search) {
      filters.name = { $regex: search, $options: "i" };
    }

    const products = await Product.find(filters).sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: products.length,
      data: products
    });
  } catch (error) {
    next(error);
  }
};

const getProductById = async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return next(new AppError("Product not found", 404));
    }

    res.status(200).json({
      success: true,
      data: product
    });
  } catch (error) {
    next(error);
  }
};

const createProduct = async (req, res, next) => {
  try {
    const product = await Product.create({
      ...req.body,
      images: normalizeImages(req.body.images)
    });

    res.status(201).json({
      success: true,
      message: "Product created successfully",
      data: product
    });
  } catch (error) {
    next(error);
  }
};

const updateProduct = async (req, res, next) => {
  try {
    const product = await Product.findByIdAndUpdate(
      req.params.id,
      {
        ...req.body,
        images: normalizeImages(req.body.images)
      },
      {
        new: true,
        runValidators: true
      }
    );

    if (!product) {
      return next(new AppError("Product not found", 404));
    }

    res.status(200).json({
      success: true,
      message: "Product updated successfully",
      data: product
    });
  } catch (error) {
    next(error);
  }
};

const deleteProduct = async (req, res, next) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);

    if (!product) {
      return next(new AppError("Product not found", 404));
    }

    res.status(200).json({
      success: true,
      message: "Product deleted successfully"
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct
};
