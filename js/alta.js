
/* ----------------------------------------------- */
/* Declaraciones de variables y funciones globales */
/* ----------------------------------------------- */

let inputs = 
let form
let button
let camposValidos

/* Mostrar u ocultar el mensaje */
const setCustomValidityJS = (mensaje, index) => {
    let divs = document.querySelectorAll("form div")
    divs[index].innerHTML = mensaje
    divs[index].style.display = mensaje ? "block" : "none"
}


/* Para comprobar la validez de los campos */
const algunCampoValido = () => {
    let valido = 
        camposValidos[0] && 
        camposValidos[1] &&
        camposValidos[2] &&
        camposValidos[3] &&
        camposValidos[4] &&
        camposValidos[5] &&
        camposValidos[6] 

    return !valido    

}


/* Validar campos */
const validar = (valor, validador, index) => {
    //console.log(valor, validador, index)
    
    if(!validador.test(valor)) {
        setCustomValidityJS("Este campo no es válido", index)
        camposValidos[index] = false
        button.disabled = true
        return null // break
    }

    camposValidos[index] = true
    button.disabled = algunCampoValido() // boolean

    setCustomValidityJS("", index)
    return valor

}



/* Todas las expresiones regulares de los campos */
const regExpValidar = [
    /^.+$/, // regexp nombre
    /^.+$/, // regexp precio
    /^[0-12]+$/, // regexp colores
    /^.+$/, // regexp dimensiones
    /^.+$/, // regexp categoria
    /^.+$/, // regexp detalles
    /^.+$/, // regexp foto
]


const renderProds = () => {
    
    const xhr = new XMLHttpRequest()
    xhr.open("get", "plantillas/listado.hbs")
    xhr.addEventListener("load", () => {
        if(xhr.status === 200) {
            let plantillasHbs = xhr.response
            console.log(plantillasHbs)

            let template = Handlebars.compile(plantillasHbs)
            console.log(template)

            let html = template({productos: productos})
            console.log(html)

            document.getElementById("")
        }
    })    

    xhr.send()
}

function leerProductoIngresado() {
    return {
        nombre: inputs[0].value,
        precio: inputs[1].value,
        colores: inputs[2].value,
        dimensiones: inputs[3].value,
        categoria: inputs[4].value,
        detalles: inputs[5].value,
        foto: inputs[6].value,
        envio: inputs[7].checked
        
    }
}

function limpiarFormulario() {
    // borro todos los inputs
    inputs.forEach((input, index) => {

        // borrar todos los input
        inputs.forEach(input => input.value = "")

        input.addEventListener("input", () => {
            validar(input.value, regExpValidar[index], index) // TODO: Revisar esto.
        })
    })

    button.disabled = true
    camposValidos = [false, false, false, false, false, false, false]
}


/* ----------------------------------------------- */
/* Inicializamos para el funcionamiento del modulo */
/* ----------------------------------------------- */



function initAlta() {
    console.warn("initAlta()")

    inputs = document.querySelectorAll("main form input")
    form = document.querySelector("main form")
    button = document.querySelector("main form button")
    
    button.disabled = true
    const camposValidos = [false, false, false, false, false, false, false]


    form.addEventListener("submit", e => {
        e.preventDefault()
    
        
    
        //console.log(producto)
        productos.push(producto)
    
        console.log(productos)
    
        renderProds()
    })
    

    renderProds()    

}




/* const productos = [ NO VA
    { nombre: "Divisor de ambiente + soporte de tv", precio: "$140.000", colores:"madera - madera blanca", dimensiones:"200 x 30 x 180", categoria:"Divisor", detalles: "melamina", foto:"img/productos/divisor-ambiente1.jpeg", envio: true},

    { nombre: "Mesita de luz", precio: "$140.000", colores:"madera - madera blanca", dimensiones:"200 x 30 x 180", categoria:"Divisor", detalles: "melamina", foto:"img/productos/mesita-de-luz.jpeg", envio: true},

    { nombre: "Escritorio", precio: "$40.000", colores:"madera - madera blanca", dimensiones:"100 x 50 x 75", categoria:"Escritorios", detalles: "melamina", foto:"img/productos/escritorio.jpeg", envio: true}
] */