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

const express = require('express');
const indexRouter = require('./routers/indexRoutes');

const app = express();

// Configuración STATIC
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname,'public')));

// GET '/api/productos' -> devuelve todos los productos.

app.get('/api/frase', (req, res)=>{
    res.send(`${frase}`);
});

// GET '/api/productos/:id' -> devuelve un producto según su id.
app.get('/api/letras/:num', (req, res)=>{
    if (isNaN(req.params.num)) {
        res.send({ error: `El parámetro ${req.params.num} no es un número.`});
    }else if (req.params.num > frase.length) {
        res.send({ error: `El parámetro ${req.params.num} es mayor a la cantidad de letras de la frase.`});
    } else {
        res.send(frase[parseInt(pos) - 1]);
    }
});

// POST '/api/productos' -> recibe y agrega un producto, y lo devuelve con su id asignado.
app.post('/api/mensajes/', (req, res)=>{
    console.log('POST request recibido');

    // acá debería crear y guardar un nuevo recurso

    const mensaje = req.body;
});

// PUT '/api/productos/:id' -> recibe y actualiza un producto según su id.
app.put('/api/mensajes-json/:id', (req, res)=>{
    console.log('PUT request recibido');

    // acá debo hallar al recurso con id == req.params.id
    // y luego reemplazarlo con el registro recibido en req.body

    res.json({
        result:'ok', 
        id:req.params.id, 
        nuevo:req.body
        });
});

// DELETE '/api/productos/:id' -> elimina un producto según su id.
app.delete('/api/mensaje/:id', (req, res)=>{
    console.log('DELETE request recibido');

    // acá debería eliminar el recurso con id == req.params.id
    
    res.json({
        result:'ok', 
        id:req.params.id, 
        });
});

const serverExpress = app.listen(port, () => {
    console.log(`Server running on port ${serverExpress.address().port}`);
});

serverExpress.on('error', (error) => {`Error en el servidor: ${error}`});

