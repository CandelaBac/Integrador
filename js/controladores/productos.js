class ProductoController extends ProductoModel {

    constructor() {
        super() 
        this.guardarProduto = this.guardarProduto.bind(this)
    }

    async obtenerProductos() {
        this.productos = await productoService.obtenerProductosService()
        return this.productos
    }
    
    async guardarProduto(producto) {
        
        const productoGuardado = await productoService.guardarProdutoService(producto)
        //console.log(productoGuardado)
    
        this.productos.push(productoGuardado)
    
        renderTablaAlta(null, this.productos)
    }
    
    async actalizarProducto(id) {
        console.log("actualizarProducto", id)
    
        const producto = formularioAlta.leerProductoIngresado()
        formularioAlta.limpiarFormulario()
    
        const productoActualizado = await productoService.actalizarProductoService(id, producto)
        //console.log(productoActualizado)
    
        const index = this.productos.findIndex(producto => producto.id == productoActualizado.id)
        this.productos.splice(index,1,productoActualizado)
    
        renderTablaAlta(null, this.productos)
    }
    
    async borrarProducto(id) { 
        console.log("borrarProducto", id)
    
        let productoBorrado = await productoService.borrarProductoService(id)
    
        const index = this.productos.findIndex(producto => producto.id == productoBorrado.id)
        this.productos.splice(index, 1)
    
        renderTablaAlta(null, this.productos)
    }
    
    
}

const productoController = new ProductoController()