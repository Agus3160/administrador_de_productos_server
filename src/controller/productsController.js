const Product = require('../models/Product')
const { AppError } = require('../libs/errorHandler')

const getAllProducts = async (_req, res, next) => {
  try{
    const products = await Product.find({})
    res.json(products)
  } catch (err) {
    next(new AppError('Error al obtener los productos', 500))
  }
}

const createProduct = async (req, res, next) => {
  try {
    const product = await Product.create(req.body)
    res.status(201).json(product)
  } catch (err) {
    next(new AppError('Error al crear el producto', 500))
  }
}

const getProductById = async (req, res, next) => {
  try{
    const product = await Product.findById(req.params.id)
    res.json(product)
  } catch (err) {
    next(new AppError('Error al obtener el producto', 500))
  }
}

module.exports = { getAllProducts, createProduct, getProductById }