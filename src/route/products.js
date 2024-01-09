const express = require('express')
const route = express.Router()

const { getAllProducts, createProduct, getProductById } = require('../controller/productsController')

route.get('/', getAllProducts)
route.post('/', createProduct)
route.get('/:id', getProductById)

module.exports = route