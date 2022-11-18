class CarritoService {
    URL_CARRITO = "https://6376777fb5f0e1eb850c93eb.mockapi.io/carrito/"

    async guardarCarritoService(carrito) {
        const carritoGuardado = await http.post(this.URL_CARRITO, carrito)
        return carritoGuardado

    }
}

const carritoService = new CarritoService()