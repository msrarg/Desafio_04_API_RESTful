// API RESTful

// Formato: link a un repositorio en Github con el proyecto cargado.
// Sugerencia: no incluir los node_modules

// >> Consigna: Realizar un proyecto de servidor basado en node.js y express que ofrezca una API RESTful de productos. 
// En detalle, que incorpore las siguientes rutas:

    // GET      '/api/productos'     -> devuelve todos los productos.
    // GET      '/api/productos/:id' -> devuelve un producto según su id.
    // POST     '/api/productos'     -> recibe y agrega un producto, y lo devuelve con su id asignado.
    // PUT      '/api/productos/:id' -> recibe y actualiza un producto según su id.
    // DELETE   '/api/productos/:id' -> elimina un producto según su id.

// Cada producto estará representado por un objeto con el siguiente formato (ver imagen):
// Cada ítem almacenado dispondrá de un id numérico proporcionado por el backend, comenzando en 1, y que se irá incrementando a medida de que se incorporen productos. Ese id será utilizado para identificar un producto que va a ser listado en forma individual.

// Para el caso de que un producto no exista, se devolverá el objeto: { error : 'producto no encontrado' }
// Implementar la API en una clase separada, utilizando un array como soporte de persistencia en memoria.
// Incorporar el Router de express en la url base '/api/productos' y configurar todas las subrutas en base a este.
// Crear un espacio público de servidor que contenga un documento index.html con un formulario de ingreso de productos con los datos apropiados.
// El servidor debe estar basado en express y debe implementar los mensajes de conexión al puerto 8080 y en caso de error, representar la descripción del mismo.
// Las respuestas del servidor serán en formato JSON. La funcionalidad será probada a través de Postman y del formulario de ingreso.

// npm init --yes
// npm install modules
// npm install express

const express = require ('express');
const app = express();
const port = '8080';
//const path = require('path');
const rutas = require('./routers/productosRoutes.js');

// const productosPath = '/api/productos';
// app.use(productosPath, require('../routes/productos'));


// Configuración STATIC - middlewares
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));
// app.use(express.urlencoded({ extendedparser : true }));
app.use(express.static('views'));
// app.use(express.static(path.join(__dirname,'public')));

// GET '/api/productos' -> devuelve todos los productos.
app.use('/api/productos', rutas.allProducts);
// GET '/api/productos/:id' -> devuelve un producto según su id.
app.use('/api/productos', rutas.idProduct);

// POST '/api/productos' -> recibe y agrega un producto, y lo devuelve con su id asignado.
app.use('/api/productos', rutas.newProduct);
// POST '/api/productos' -> recibe y agrega un producto, y lo devuelve con su id asignado.
app.use('/api/productos', rutas.newProductHtml);

// PUT '/api/productos/:id' -> recibe y actualiza un producto según su id.
app.use('/api/productos', rutas.updateProduct);

// DELETE '/api/productos/:id' -> elimina un producto según su id.
app.use('/api/productos', rutas.deleteProduct);

const serverExpress = app.listen(port, () => {
    console.log(`Server running on port ${serverExpress.address().port}`);
});

serverExpress.on('error', (error) => {`Error en el servidor: ${error}`});
