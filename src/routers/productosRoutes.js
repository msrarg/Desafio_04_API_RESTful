const express = require('express');
// const { Router } = require('express');
const rutas = express.Router();

const productosController = require('../controllers/productosController.js');

// GET '/api/productos' -> devuelve todos los productos.
exports.allProducts   = rutas.get('/',    productosController.consultaProductos);
// GET '/api/productos/:id' -> devuelve un producto según su id.
exports.idProduct     = rutas.get('/:id', productosController.consultaProductoId);

// POST '/api/productos' -> recibe y agrega un producto, y lo devuelve con su id asignado.
exports.newProduct     = rutas.post('/',     productosController.saveProducto);
// POST '/api/productos' -> recibe y agrega un producto, y lo devuelve con su id asignado.
exports.newProductHtml = rutas.post('/html', productosController.saveProductoId);
// PUT '/api/productos/:id' -> recibe y actualiza un producto según su id.
exports.updateProduct = rutas.put('/:id',    productosController.updateProductoId);

// DELETE '/api/productos/:id' -> elimina un producto según su id.
exports.deleteProduct = rutas.delete('/:id', productosController.deleteProductoId);