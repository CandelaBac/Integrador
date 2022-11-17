class ProductoController {
    constructor() {
        //super()
    }

    async obtenerProductos() {
        productos = await obtenerProductosService()
        renderProds()
    }
    
    async guardarProduto() {
        const producto = leerProductoIngresado()
        limpiarFormulario()
    
        const productoGuardado = await guardarProdutoService(producto)
        console.log(productoGuardado)
    
        producto.push(productoGuardado)
    
        renderProds()
    }
    
    async actalizarProducto(id) {
        console.log("actualizarProducto", id)
    
        const producto = leerProductoIngresado()
        limpiarFormulario()
    
        const productoActualizado = await actalizarProductoService(id, producto)
        console.log(productoActualizado)
    
        const index = productos.findIndex(producto => producto.id == productoActualizado.id)
        productos.splice(index,1,productoActualizado)
    
        renderProds()
    }
    
    async borrarProducto(id) {
        console.log("borrarProducto", id)
    
        let productoBorrado = await borrarProductoService(id)
    
        const index = productos.findIndex(producto => producto.id == productoBorrado.id)
        productos.splice(index, 1)
    
        renderProds()
    }
    
    
}