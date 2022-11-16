var elemSectionCarrito = document.getElementsByClassName("section-carrito")[0]

function start() {

    /* ---------------------------- */
    /*      FUNCIONES HELPERS       */
    /* ---------------------------- */

    // AJAX
    function ajax(url, metodo = "get") {
        const xhr = new XMLHttpRequest()
        xhr.open(metodo,url)
        xhr.send()

        return xhr
    }

    function getNombreArchivo(id) {
        return "vistas/" + id + ".html" // "vistas/alta.html"
    }

    function initJS(id) {
        if(id = "alta") {
            initAlta()
        }
        else if (id === "inicio") {
            initCard()
        }
        else if (id === "nosotros") {
            initNosotros()
        }
        else if (id === "contacto") {
            initContacto()
        }
    }


    function cargarPlantilla(id) {
        let archivo = getNombreArchivo(id)

        let xhr = ajax(archivo)
        xhr.addEventListener("load", () => {
            if(xhr.status === 200) {
                let plantilla = xhr.response

                // Carga del codigo de la vista (HTML) de la plantilla
                let main = document.querySelector("main")
                main.innerHTML = plantilla

                // Carga del codigo script (JS) de la plantilla
                initJS()
            }
        })
    }

}

start()