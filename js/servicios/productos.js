class ProductoService {
    
    URL_PRODUCTOS = "https://6376777fb5f0e1eb850c93eb.mockapi.io/productos/"
    

    async obtenerProductosService() {
        let productos = await http.get(this.URL_PRODUCTOS)
        return productos
    }

    async guardarProductoService(producto) {
        const productoGuardado = await http.post(this.URL_PRODUCTOS, producto)
        // console.log(productoGuardado)
        return productoGuardado
    }

    async actualizarProductoService(id, producto) {
        const productoActualizado = await http.put(this.URL_PRODUCTOS, id, producto)
        // console.log(productoActualizado)
        return productoActualizado
    }

    async borrarProductoService(id) {
        const productoBorrado = await http.del(this.URL_PRODUCTOS, id)
        // console.log(productoBorrado)
        return productoBorrado
    }
    
}

const productoService = new ProductoService()





