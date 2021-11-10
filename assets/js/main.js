const pokeContainer = document.getElementById('poke-container');
//REFERENCIAMOS CUANTOS POKEMONES QUERES TRAER
const pokemonNumber = 9;
const spinner = document.getElementById("spinner")


function fetchPokemon(id) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
        .then((res) => res.json())
        .then((data) => {
            createPokemon(data);
            spinner.style.display = "none";
        })
}
//CREAMOS UNA FUNCION ASINCRONICA PARA LLAMAR A TODOS LOS POKEMONES QUE PIDAMOS
function fetchPokemons(number) {
    spinner.style.display = "block";
    for (let i = 1; i <= number; i++) {
        fetchPokemon(i)
    }
}



//PROBAMOS TRAYENDO UN SOLO POKEMON
//const getPokemon = async(id) => {
//  const url = 'https://pokeapi.co/api/v2/pokemon/' + id
// console.log(url)
//SE CREA UNA RESPUESTA QUE VAMOS A ESPERAR DESPUES DE LA PETICION DE LA URL
// const res = await fetch(url);
//UNA VEZ OBTENIDA LA RESPUESTA LA PASAMOS A FORMATO JSON(DE TEXTO PLANO A OBJETO)
// const pokemon = await res.json()
// crearPokemonCard(pokemon)
//}


//CREAMOS LAS CARDS QUE VAN A ALMACENAR Y MOSTRAR EN EL DOM(HTML)

function createPokemon(pokemon) {
    //EFFECT FLIP-CARD
    const flipCard = document.createElement('div')
    flipCard.classList.add("flip-card");

    const cardContainer = document.createElement('div')
    cardContainer.classList.add("card-container");

    flipCard.appendChild(cardContainer)

    const card = document.createElement('div');
    card.classList.add('pokemon-block');

    const spriteContainer = document.createElement('div');
    spriteContainer.classList.add('img-container');

    const sprite = document.createElement('img');
    sprite.src = pokemon.sprites.front_default;

    //SE AGREGA UN EFECTO PARA LA EL CONTENEDOR DE IMG
    spriteContainer.appendChild(sprite);

    const number = document.createElement('p');
    number.textContent = `#${pokemon.id.toString().padStart(3,0)}`;

    const name = document.createElement('h2');
    name.classList.add('name');
    name.textContent = pokemon.name

    //AGREGAMOS LAS COSAS PARA QUE APAREZCAN EN LA CARTA
    card.appendChild(spriteContainer)
    card.appendChild(number)
    card.appendChild(name)

    const cardBack = document.createElement('div')
    cardBack.classList.add("pokemon-block-back");
    //  LLAMAR A LA FUNCION CON LAS STATS DEL POKEMON PARA QUE SE VISUALICE
    cardBack.appendChild(progressBar(pokemon.stats))


    cardContainer.appendChild(card);
    cardContainer.appendChild(cardBack);
    pokeContainer.appendChild(flipCard);
}

//CREACION DE BARRAS DE PROGRESO
function progressBar(stats) {
    const statsContainer = document.createElement('div')
    statsContainer.classList.add("stats-container");

    for (let i = 0; i < 3; i++) {
        const stat = stats[i];

        const statPercent = stat.base_state / 2 + "%";

        const statContainer = document.createElement('div')
        statContainer.classList.add("stat-container");

        const statName = document.createElement('div')
        statName.textContent = stat.stat.name;

        const progress = document.createElement('div')
        progress.classList.add("progress");

        const progressBar = document.createElement('div')
        progressBar.classList.add("progress-bar");

        progressBar.setAttribute("aria-valuenow", stat.base_stat);
        progressBar.setAttribute("aria-valuemin", 0);
        progressBar.setAttribute("aria-valuemax", 200);
        progressBar.style.width = statPercent;

        progressBar.textContent = stat.base_stat;

        progress.appendChild(progressBar);
        statContainer.appendChild(statName);
        statContainer.appendChild(progress);

        statsContainer.appendChild(statContainer);
    }

    return statsContainer

}

fetchPokemons(9)
fetchPokemon()

//FOOTER
const footer = document.getElementById("footer");
const containCopyRight = document.createElement('div')
containCopyRight.classList.add("contain-copyright");

const textDescription = document.createElement('div')
textDescription.classList.add("text-description");
textDescription.innerHTML = ` <i class="far fa-copyright"></i> <span>Pokedex Classic Epic- Todos los derechos reservados</span>`;

const containDev = document.createElement('div')
containDev.classList.add("contain-dev");
containDev.innerHTML = ` <i class="fas fa-laptop-code"></i> <span>Developer by <a href="https://github.com/FabioMamani">Fabio Mamani</a> </span>`;

footer.appendChild(containCopyRight)
containCopyRight.appendChild(textDescription)
footer.appendChild(containDev)
    //const crearPokemonCard = (pokemon) => {
    //  const pokemonEl = document.createElement('div');
    //pokemonEl.classList.add('pokemon');
    //const pokeInnerHtml = pokemon.name
    //}