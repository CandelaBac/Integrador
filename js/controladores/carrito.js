class CarritoController extends CarritoModel {
    
    constructor() {
        super()

        try {
            
            this.carrito = JSON.parse(localStorage.getItem("carrito")) || []

        } catch (error) {
            
            console.error("Algo ocurrio con la lectura del localStorage", error)
            this.carrito = []
            localStorage.setItem("carrito", this.carrito)
            
        }
    }


    elProductoEstaEnElCarrito(producto) {
        return this.carrito.filter(prod => prod.id == producto.id).length
    }

    ObtenerProductoDeCarrito(producto) {

        return this.carrito.find(prod => prod.id == producto.id)    
    }

    AgregarAlCarrito(producto) {
        console.log(producto)

        if(!this.elProductoEstaEnElCarrito(producto)) {
            producto.cantidad = 1
            this.carrito.push(producto)

        }else {
            const productoDeCarrito = this.ObtenerProductoDeCarrito(producto)
            productoDeCarrito.cantidad++
        }

        localStorage.setItem("carrito", JSON.stringify(this.carrito))

            
    }

    async BorrarProductoCarrito(id) {
        
        try {

            const index = this.carrito.findIndex(prod => prod.id == id)
            this.carrito.splice(index, 1)
            localStorage.setItem("carrito", JSON.stringify(this.carrito))

            await renderTablaCarrito(this.carrito)
            
        } catch (error) {
            console.log(error)
            
        }
    }


    async EnviarCarrito() {

        try {

            const elemSectionCarrito = document.getElementsByClassName("section-carrito")[0]

            elemSectionCarrito.innerHTML = "<h2>Enviando carrito...</h2>"
            await carritoService.guardarCarritoService(this.carrito)
            this.carrito = []
            localStorage.setItem("carrito", this.carrito)

            elemSectionCarrito.innerHTML = "<h2>Enviando carrito <b>OK!</b> </h2>"
            
        } catch (error) {

            console.error(error)
            
        }      
    }

}

const carritoController = new CarritoController()