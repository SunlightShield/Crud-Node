const express = require ("express");
const router = express.Router();
const Product = require("../models/productModels") 
const {getProducts, getByIdProducts, createProduct, editarProduct, eliminarProduct} = require("../Controller/productController")

//traer
router.get('/mostrar', getProducts)

//traer por id
router.get('/mostrar/id/:id', getByIdProducts)

//crear
router.post('/crear', createProduct)

// editar
router.put('/editar/:id', editarProduct)

// delete a product

router.delete('/eliminar/:id', eliminarProduct)

module.exports = router; 