const contenedor = require('../models/contenedor.js')

exports.consultaProductos = async (req,res)=>{
	let allProducts = await contenedor.getAll();
	res.json(allProducts);
};

exports.consultaProductoId = async (req,res)=>{
    let id = parseInt(req.params.id)
    if (isNaN(id)) {
        res.send({ error: `El parámetro ${req.params.id} no es un número.`});
    } else {
        let product = await contenedor.getById(id);
        if(product){
            res.json(product);
        }else{
            res.send({ error: `Producto no encontrado con el id número: ${id}.`});
        }
    }
};

exports.saveProducto = async (req,res)=>{
	let product = await contenedor.save(producto);
	res.json(product);
};

exports.saveProductoId = async (req,res)=>{
	let product = await contenedor.save(id);
	res.json(product);
};

exports.deleteProductoId = async (req,res)=>{
	let product = await contenedor.deleteById(id);
	res.json(product);
};

/*
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
*/
