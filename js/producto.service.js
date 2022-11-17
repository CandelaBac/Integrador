const URL_PRODUCTOS = "https://6376777fb5f0e1eb850c93eb.mockapi.io/productos/"

async function obtenerProductosService() {
    let productos = await get (URL_PRODUCTOS)
    return productos

}

async function guardarProdutoService(producto) {
    const productoGuardado = await post(URL_PRODUCTOS, producto)
    //console.log(productoGuardado)
    return productoGuardado
}

async function actalizarProductoService(id, producto) {
    const productoActualizado = await put(URL_PRODUCTOS, id, producto)
    return productoActualizado
}

async function borrarProductoService(id) {
    const productoBorrado = await del(URL_PRODUCTOS, id)
    return productoBorrado
}

/* ------------------------------------ */
/* --------------- TESTES ------------- */
/* ------------------------------------ */

/* const producto = {
    nombre: "Divisor de ambiente + soporte de TV",
    precio: "$140.000",
    colores: "Madera - Madera blanca",
    dimensiones: "200 x 30 x 180",
     
}

console.log(producto)


const campoEditado = {
    ...producto,
    precio: 456
}

console.log(campoEditado) */

// guardarProdutoService(producto)

// actalizarProductoService(7, producto)

// borrarProductoService(1)

