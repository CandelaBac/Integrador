function initInicio() {
    console.warn("initCard()")

    function Card(heading, description, image) {
        this.heading = heading
        this.description = description
        this.image = image
    
    
        // metodo
        this.appendTo = function (destinationElement) {
            let card = document.createElement("a")
            card.classList.add("card")
            card.href = "https://sony.com"
    
            let that = this
            console.log(that)
    
            card.addEventListener("click", function(e) {
                e.preventDefault()
                console.log(this)
    
                let nuevoItemCarrito = document.createElement("div")
                nuevoItemCarrito.classList.add("carrito__item")
                nuevoItemCarrito.innerHTML = that.heading
                console.log(nuevoItemCarrito)
    
                elemSectionCarrito.append(nuevoItemCarrito)
            })
    
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
        "img/productos/divisor-ambiente1.jpeg"
    )
    
    const card2 = new Card(
        "Divisor de ambiente grande + soprte de tv",
        "Mueble de melamina de alta densidad con estructura metalica negra + soprte de tv que gira 360°",
        "img/productos/divisor-ambiente2.jpeg"
    )
    
    const card3 = new Card(
        "Divisor de ambiente",
        "Mueble de melamina de alta densidad con estructura metalica negra + perchero para que cuelgues tu ropa!",
        "img/productos/divisor-ambiente3.jpeg"
    )
    
    const card4 = new Card(
        "Escritorio",
        "Mueble de melamina de alta densidad con estructura metalica negra + un cajon y espacio de guardado bajo mesada",
        "img/productos/escritorio.jpeg"
    )
    
    const card5 = new Card(
        "Mesita de luz",
        "Mueble de melamina de alta densidad con estructura metalica negra + cajon de guardado",
        "img/productos/mesita-de-luz.jpeg"
    )
    
    const card6 = new Card(
        "Perchero + mueble de apoyo",
        "Mueble de melamina de alta densidad con estructura metalica negra + un espacio para que guardes zapatillas",
        "img/productos/perchero.jpeg"
    )
    
    const card7 = new Card(
        "Rack de tv chico",
        "Mueble de melamina de alta densidad con estructura metalica negra + espacios de guardado",
        "img/productos/Rack-chico.jpeg"
    )
    
    const card8 = new Card(
        "Rack de tv grande",
        "Mueble de melamina de alta densidad con estructura metalica negra + espacios de guardado",
        "img/productos/Rack-grande.jpeg"
    )
    
    const card9 = new Card(
        "Recibidor",
        "Mueble de melamina de alta densidad con estructura metalica negra + espacios de guardo bajo mesada",
        "img/productos/recibidor.jpeg"
    )
    
    const card10 = new Card(
        "Recibidor",
        "Mueble de melamina de alta densidad con estructura metalica negra",
        "img/productos/guardado-cama.jpeg"
    )
    
    const card11 = new Card(
        "Biblioteca",
        "Mueble de melamina de alta densidad con estructura metalica negra, sus estantes son irregulares para aportar un mayor diseño",
        "img/productos/biblioteca-1.jpeg"
    )
    
    const card12 = new Card(
        "Biblioteca + vinoteca",
        "Mueble de melamina de alta densidad con estructura metalica negra, tiene la funcion de un divisor de ambientes, cuenta con espacios de guardo y una vinoteca",
        "/img/productos/biblioteca-2.jpeg"
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
    
    /* console.warn("-----")
    console.log(cards[0].heading)
    console.log(cards[0].image)
    console.warn("-----")
    console.log(cards[7].heading)
    console.log(cards[7].image) */
    
    console.log(cards)
    
    
    /* card1.appendTo(elemCardsContainer)
    card2.appendTo(elemCardsContainer)
    card3.appendTo(elemCardsContainer)
    card4.appendTo(elemCardsContainer)
    card5.appendTo(elemCardsContainer)
    card6.appendTo(elemCardsContainer)
    card7.appendTo(elemCardsContainer)
    card8.appendTo(elemCardsContainer)
    card9.appendTo(elemCardsContainer)
    card10.appendTo(elemCardsContainer)
    card11.appendTo(elemCardsContainer)
    card12.appendTo(elemCardsContainer) */
    
    /* cards[0].appendTo(elemCardsContainer)
    cards[1].appendTo(elemCardsContainer)
    cards[2].appendTo(elemCardsContainer)
    cards[3].appendTo(elemCardsContainer)
    cards[4].appendTo(elemCardsContainer)
    cards[5].appendTo(elemCardsContainer)
    cards[6].appendTo(elemCardsContainer)
    cards[7].appendTo(elemCardsContainer)
    cards[8].appendTo(elemCardsContainer)
    cards[9].appendTo(elemCardsContainer)
    cards[10].appendTo(elemCardsContainer)
    cards[11].appendTo(elemCardsContainer) */
    
    for(const unaCard of cards) {
        unaCard.appendTo(elemCardsContainer)
    }

}





