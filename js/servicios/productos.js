class ProductoService {
    
    URL_PRODUCTOS = "https://6376777fb5f0e1eb850c93eb.mockapi.io/productos/"
    

    async obtenerProductosService() {
        let productos = await get (this.URL_PRODUCTOS)
        return productos
    
    }
    
    async guardarProdutoService(producto) {
        const productoGuardado = await post(this.URL_PRODUCTOS, producto)
        //console.log(productoGuardado)
        return productoGuardado
    }
    
    async actalizarProductoService(id, producto) {
        const productoActualizado = await put(this.URL_PRODUCTOS, id, producto)
        return productoActualizado
    }
    
    async borrarProductoService(id) {
        const productoBorrado = await del(this.URL_PRODUCTOS, id)
        return productoBorrado
    }


}

const productoService = new ProductoService()




