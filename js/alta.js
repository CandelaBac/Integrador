const productos = []
const camposValidos = [false, false, false, false, false, false, false]

const inputs = document.querySelectorAll("input")
const form = document.querySelector("form")
const button = document.querySelector("button")

button.disabled = true

console.log(inputs, form, button)


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

inputs.forEach((input, index) => {
    input.addEventListener("input", () => {
        validar(input.value, regExpValidar[index])
    })
})

/* Dibuja los productos */
const renderProdsObjetos = () => {

}


/* Me permite dibujar cada una de las nuevas filas de la tabla */
const renderProdsTemplateString = () => {

}

