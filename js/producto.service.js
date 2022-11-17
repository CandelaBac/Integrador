const URL_PRODUCTOS = "https://6376777fb5f0e1eb850c93eb.mockapi.io/productos"

async function obtenerProductosService() {
    let productos = await get (URL_PRODUCTOS)
    return productos

}

obtenerProductosService()