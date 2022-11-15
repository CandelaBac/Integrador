function Card(heading, description, image) {
    this.heading = heading
    this.description = description
    this.image = image

    this.appendTo = function () {
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

console.log(card1)
console.log(card2)





/* <a href="#" class="card">
            <article class="card__article">
              <div class="card__image-container">
                <img class="card__image" src="img/productos/divisor ambiente 3.jpeg" alt="Divisor de ambiente"/>
              </div>
              <div class="card__content">
                <h2 class="card__heading">Divisor de ambiente</h2>
                <div class="card__description">
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Odit deleniti consequuntur inventore minus ea consequatur
                    omnis. Eaque repudiandae amet ad!
                  </p>
                </div>
              </div>
            </article>
          </a>
          <!-- Final class .card -->
          <a href="#" class="card">
            <article class="card__article">
              <div class="card__image-container">
                <img class="card__image" src="img/productos/escritorio.jpeg" alt="Escritorio"/>
              </div>
              <div class="card__content">
                <h2 class="card__heading">Escritorio</h2>
                <div class="card__description">
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Odit deleniti consequuntur inventore minus ea consequatur
                    omnis. Eaque repudiandae amet ad!
                  </p>
                </div>
              </div>
            </article>
          </a>
          <!-- Final class .card -->
          <a href="#" class="card">
            <article class="card__article">
              <div class="card__image-container">
                <img class="card__image" src="img/productos/mesita de luz.jpeg" alt="mesita de luz"/>
              </div>
              <div class="card__content">
                <h2 class="card__heading">Mesita de luz</h2>
                <div class="card__description">
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Odit deleniti consequuntur inventore minus ea consequatur
                    omnis. Eaque repudiandae amet ad!
                  </p>
                </div>
              </div>
            </article>
          </a>
          <!-- Final class .card -->
          <a href="#" class="card">
            <article class="card__article">
              <div class="card__image-container">
                <img class="card__image" src="img/productos/perchero.jpeg" alt="Perchero + mueble de apoyo"/>
              </div>
              <div class="card__content">
                <h2 class="card__heading">Perchero + mueble de apoyo</h2>
                <div class="card__description">
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Odit deleniti consequuntur inventore minus ea consequatur
                    omnis. Eaque repudiandae amet ad!
                  </p>
                </div>
              </div>
            </article>
          </a>
          <!-- Final class .card -->
          <a href="#" class="card">
            <article class="card__article">
              <div class="card__image-container">
                <img class="card__image" src="img/productos/Rack chico.jpeg" alt="Rack de tv chico"/>
              </div>
              <div class="card__content">
                <h2 class="card__heading">Rack de tv chico</h2>
                <div class="card__description">
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Odit deleniti consequuntur inventore minus ea consequatur
                    omnis. Eaque repudiandae amet ad!
                  </p>
                </div>
              </div>
            </article>
          </a>
          <!-- Final class .card -->
          <a href="#" class="card">
            <article class="card__article">
              <div class="card__image-container">
                <img class="card__image" src="img/productos/Rack grande.jpeg" alt="Rack de tv grande"/>
              </div>
              <div class="card__content">
                <h2 class="card__heading">Rack de tv grande</h2>
                <div class="card__description">
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Odit deleniti consequuntur inventore minus ea consequatur
                    omnis. Eaque repudiandae amet ad!
                  </p>
                </div>
              </div>
            </article>
          </a>
          <a href="#" class="card">
            <article class="card__article">
              <div class="card__image-container">
                <img class="card__image" src="img/productos/recibidor.jpeg" alt="recibidor"/>
              </div>
              <div class="card__content">
                <h2 class="card__heading">Recibidor</h2>
                <div class="card__description">
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Odit deleniti consequuntur inventore minus ea consequatur
                    omnis. Eaque repudiandae amet ad!
                  </p>
                </div>
              </div>
            </article>
          </a>
          <a href="#" class="card">
            <article class="card__article">
              <div class="card__image-container">
                <img class="card__image" src="img/productos/guardado de cama.jpeg" alt="guardado de cama"/>
              </div>
              <div class="card__content">
                <h2 class="card__heading">Pie de cama</h2>
                <div class="card__description">
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Odit deleniti consequuntur inventore minus ea consequatur
                    omnis. Eaque repudiandae amet ad!
                  </p>
                </div>
              </div>
            </article>
          </a>  */