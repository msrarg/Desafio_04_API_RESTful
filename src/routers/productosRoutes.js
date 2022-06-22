const express = require('express');
const rutas = express.Router();
//const {Router} = express;

const productosController = require('../controllers/productosController.js');

// GET '/api/productos' -> devuelve todos los productos.
exports.allProducts   = rutas.get('/api/productos',     productosController.consultaProductos);
// GET '/api/productos/:id' -> devuelve un producto según su id.
exports.idProduct     = rutas.get('/api/productos/:id', productosController.consultaProductoId);
// POST '/api/productos' -> recibe y agrega un producto, y lo devuelve con su id asignado.
exports.newProduct    = rutas.post('/api/productos/',    productosController.saveProducto);
// PUT '/api/productos/:id' -> recibe y actualiza un producto según su id.
exports.updateProduct = rutas.put('/api/productos/:id', productosController.saveProductoId);
// DELETE '/api/productos/:id' -> elimina un producto según su id.
exports.deleteProduct = rutas.delete('/api/productos/:id', productosController.deleteProductoId);