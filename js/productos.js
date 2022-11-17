let productos = []

async function obtenerProductos() {
    productos = await obtenerProductosService()
    renderProds()
}

async function guardarProduto() {
    const producto = leerProductoIngresado()
    limpiarFormulario()

    const productoGuardado = await guardarProdutoService(producto)
    console.log(productoGuardado)

    producto.push(productoGuardado)

    renderProds()
}