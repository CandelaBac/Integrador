function Card(heading, description, image) {
    this.heading = heading
    this.description = description
    this.image = image

    this.appendTo = function (destinationElement) {
        let card = document.createElement("a")
        card.classList.add("card")
        card.href = "https://sony.com"

        card.innerHTML = `
        <article class="card__article">
            <div class="card__image-container">
                <img class="card__image" 
                src= ${image}
                alt= ${heading}
                />
            </div>
            <div class="card__content">
                <h2 class="card__heading">${heading}</h2>
            <div class="card__description">
                <p>${description}</p>
            </div>
        </article>`

        destinationElement.appendChild(card)

    }


}


const elemCardsContainer = document.getElementsByClassName("cards-container")[0]
console.log(elemCardsContainer)

const card1 = new Card(
    "Divisor de ambiente + soporte de tv",
    "Mueble de melamina de alta densidad con estructura metalica negra + soprte de tv que gira 360°",
    "img/productos/divisor ambiente 1.jpeg"
)

const card2 = new Card(
    "Divisor de ambiente grande + soprte de tv",
    "Mueble de melamina de alta densidad con estructura metalica negra + soprte de tv que gira 360°",
    "img/productos/divisor ambiente 2.jpeg"
)

const card3 = new Card(
    "Divisor de ambiente",
    "Mueble de melamina de alta densidad con estructura metalica negra + perchero para que cuelgues tu ropa!",
    "img/productos/divisor ambiente 3.jpeg"
)

const card4 = new Card(
    "Escritorio",
    "Mueble de melamina de alta densidad con estructura metalica negra + un cajon y espacio de guardado bajo mesada",
    "img/productos/escritorio.jpeg"
)

const card5 = new Card(
    "Mesita de luz",
    "Mueble de melamina de alta densidad con estructura metalica negra + cajon de guardado",
    "img/productos/mesita de luz.jpeg"
)

const card6 = new Card(
    "Perchero + mueble de apoyo",
    "Mueble de melamina de alta densidad con estructura metalica negra + un espacio para que guardes zapatillas",
    "img/productos/perchero.jpeg"
)

const card7 = new Card(
    "Rack de tv chico",
    "Mueble de melamina de alta densidad con estructura metalica negra + espacios de guardado",
    "img/productos/Rack chico.jpeg"
)

const card8 = new Card(
    "Rack de tv grande",
    "Mueble de melamina de alta densidad con estructura metalica negra + espacios de guardado",
    "img/productos/Rack grande.jpeg"
)

const card9 = new Card(
    "Recibidor",
    "Mueble de melamina de alta densidad con estructura metalica negra + espacios de guardo bajo mesada",
    "img/productos/recibidor.jpeg"
)

const card10 = new Card(
    "Recibidor",
    "Mueble de melamina de alta densidad con estructura metalica negra",
    "img/productos/guardado de cama.jpeg"
)

const card11 = new Card(
    "Biblioteca",
    "Mueble de melamina de alta densidad con estructura metalica negra, sus estantes son irregulares para aportar un mayor diseño",
    "img/productos/biblioteca1.jpeg"
)

const card12 = new Card(
    "Biblioteca + vinoteca",
    "Mueble de melamina de alta densidad con estructura metalica negra, tiene la funcion de un divisor de ambientes, cuenta con espacios de guardo y una vinoteca",
    "/img/productos/"
)    


    



console.log(card1)
console.log(card2)
console.log(card3)
console.log(card4)
console.log(card5)
console.log(card6)
console.log(card7)
console.log(card8)
console.log(card9)
console.log(card10)
console.log(card11)
console.log(card12)

const cards = [
    card1, 
    card2,
    card3,
    card4,
    card5,
    card6,
    card7,
    card8,
    card9,
    card10,
    card11,
    card12
]

console.log(cards)


card1.appendTo(elemCardsContainer)

