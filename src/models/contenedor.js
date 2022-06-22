const fs = require("fs").promises;
const pathFile = `./src/models/productos.json`;
const encoding = `utf-8`;

class Contenedor {
  constructor(fs, pathFile, encoding) { 
    this.fs       = fs;
    this.pathFile = pathFile;
    this.encoding = encoding;
  }

  async validarArchivo() {
    try {
      // Se trata de leer el archivo para verificar su existencia.
      let datos = await this.fs.readFile(this.pathFile, this.encoding); 
        if (!datos) {
          try{
            this.fs.writeFile(this.pathFile, '');
          } 
          catch(error) {
            console.log(`Se produjo un error al intentar inicializar el archivo: ${error}`);
          }
        }
        return true;
    }catch (error) {
      console.log(`Se produjo un error al intentar leer el archivo: ${error}`);
      try{
        // Si no lo puedo leer es porque no existe asi que lo creo y lo inicializo.
        this.fs.writeFile(this.pathFile, '');
        console.log(`Se creó exitosamente el archivo`);
        return true;
      }catch(e){
        console.log(`Se produjo un error al intentar crear el archivo: ${e}`);
        return false;
      }
    }
  }

  // Se prueba el correcto funcionamiento del método getAll()
  async getAll() {
    try {
      let productos = await this.fs.readFile(this.pathFile, this.encoding); // Se trata de leer el archivo.
      if (productos){
        const arrayProductos = JSON.parse(productos); // Read JSON From File
        return (arrayProductos);
      }
      return ([]);
    } catch (error) {
      console.log(`Error al leer el archivo en el método getAll(): ${error}`);
    }
  }

  // método getById(Number): Object -> Recibe un id y devuelve el objeto con ese id, o null si no está.
  async getById(id) {
    if(!isNaN(id)){
      try {
        let arrayProductos = await this.getAll();
        if (arrayProductos.length > 0){
          let product = arrayProductos.find((producto) => producto.id === id);
          return product;
        }
        return null;        
      } catch (error) {
        console.log(`Error al leer el archivo en el método getById(): ${error}`);
      }
    } else {
      console.log(`El id ${id} no es un número.`);
    }
  }

  // método save(Object): Number -> Recibe un objeto, lo guarda en el archivo, devuelve el id asignado.
  async save(producto) {
    let maxIndice = 0;
    try {
      let arrayProductos = await this.getAll();
      if (arrayProductos.length > 0) {
        maxIndice = Math.max(...arrayProductos.map(producto => producto.id))
      }
      if(!isNaN(maxIndice)){
        arrayProductos.push({title: producto.title, price: producto.price, thumbnail: producto.thumbnail, id: ++maxIndice}) 
        this.fs.writeFile(this.pathFile, JSON.stringify(arrayProductos));
        console.log(`Se agregó el id: ${maxIndice} al archivo`);
      } else {
        console.log(`No se pudo calcular el último id en el archivo, id: ${maxIndice}`);
      }
      return (maxIndice);     
    } catch (error) {
      console.log(`Se produjo un error al intentar guardar el archivo: ${error}`);
    }
  }
    
  // método deleteById(Number): void -> Elimina del archivo el objeto con el id buscado.
  async deleteById(id) {
    try {
      let object = await this.getById(id);
      if(object){
        let arrayProductos = await this.getAll();
        let newArray = arrayProductos.filter(prod => prod.id != id)
        this.fs.writeFile(this.pathFile, JSON.stringify(newArray));
        console.log(`Se ha eliminado el producto con id: ${id}`);
      } else {
        console.log(`${id} inexistente.`);
      }
    } catch (error) {
      console.log(`Hubo un error al eliminar un producto por su id: ${error}`);
    }
  }

  // método deleteAll(): void -> Elimina todos los objetos presentes en el archivo.
  async deleteAll() {
    try {
      let arrayProductos = await this.getAll();
      let cantidad = arrayProductos.length;
      if (arrayProductos.length > 0) {
        arrayProductos.length = 0;
        // this.fs.writeFile(this.pathFile, JSON.stringify(arrayProductos));
        this.fs.writeFile(this.pathFile, '');
        console.log(`Se han eliminado: ${cantidad} productos`);
      } else {
        console.log(`No existen productos en el archivo para eliminar.`);
      }
    } catch (error) {
      console.log(`Hubo un error al eliminar todos los productos: ${error}`);
    }
  }
}

module.exports = new Contenedor(fs, pathFile, encoding);