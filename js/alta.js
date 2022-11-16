function initAlta() {
    console.warn("initAlta()")


    const productos = [
        { nombre: "Divisor de ambiente + soporte de tv", precio: "$140.000", colores:"madera - madera blanca", dimensiones:"200 x 30 x 180", categoria:"Divisor", detalles: "melamina", foto:"img/productos/divisor-ambiente1.jpeg", envio: true},
    
        { nombre: "Mesita de luz", precio: "$140.000", colores:"madera - madera blanca", dimensiones:"200 x 30 x 180", categoria:"Divisor", detalles: "melamina", foto:"img/productos/mesita-de-luz.jpeg", envio: true},
    
        { nombre: "Escritorio", precio: "$40.000", colores:"madera - madera blanca", dimensiones:"100 x 50 x 75", categoria:"Escritorios", detalles: "melamina", foto:"img/productos/escritorio.jpeg", envio: true}
    ]
    
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
        console.log(valor, validador, index)
        
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
            validar(input.value, regExpValidar[index], index)
        })
    })
    
    
    form.addEventListener("submit", e => {
        e.preventDefault()
    
        const producto = {
            nombre: inputs[0].value,
            precio: inputs[1].value,
            colores: inputs[2].value,
            dimensiones: inputs[3].value,
            categoria: inputs[4].value,
            detalles: inputs[5].value,
            foto: inputs[6].value,
            envio: inputs[7].checked
        }
    
        // borrar todos los input
        inputs.forEach(input => input.value = "")
    
        //console.log(producto)
        productos.push(producto)
    
        button.disabled = true
        console.log(productos)
    
        //renderProdsObjetos()
        //renderProdsTemplateString()
        renderProds()
    })
    
    
    /* Dibuja los productos */
    const renderProdsObjetos = () => {
        let html = ""
        for (let i = 0; i < productos.length; i++) {
            html += `<p>${JSON.stringify(productos[i])}</p>`
        }
        document.getElementById("listado-productos").innerHTML = html
    
    }
    
    
    /* Me permite dibujar cada una de las nuevas filas de la tabla */
    const renderProdsTemplateString = () => {
        let html = ""
    
        html += "<table>" 
        console.log(html)
    
        html += `
        <tr>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Colores</th>
            <th>Dimensiones</th>
            <th>Categoria</th>
            <th>Detalles</th>
            <th>Foto</th>
            <th>Envio</th>
        </tr>
        `
    
        for (let i = 0; i < productos.length; i++) {
            let producto = productos[i]
            console.log(producto)
            
            html += `   
            <tr>
                <td>${producto.nombre}</td>
                <td>${producto.precio}</td>
                <td>${producto.colores}</td>
                <td>${producto.dimensiones}</td>
                <td>${producto.categoria}r</td>
                <td>${producto.detalles}</td>
                <td>${producto.foto}</td>
                <td>${producto.envio}</td>
            </tr>
            `
            
        }
    
        html += "</table>"
        document.getElementById("listado-productos").innerHTML = html
    
    
    }
    
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
    renderProds()    

}


