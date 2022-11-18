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


    elProductoEstaEnElCarrito() {
            
    }

    ObtenerProductoDeCarrito() {
            
    }

    AgregarAlCarrito() {
            
    }

    BorrarProductoCarrito() {
            
    }


    EnviarCarrito() {
            
    }

}

const carritoController = new CarritoController()