const pokeContainer = document.getElementById('poke-container');
//REFERENCIAMOS CUANTOS POKEMONES QUERES TRAER
const pokemonNumber = 9;


function fetchPokemon(id) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
        .then((res) => res.json())
        .then((data) => {
            createPokemon(data)
        })
}
//CREAMOS UNA FUNCION ASINCRONICA PARA LLAMAR A TODOS LOS POKEMONES QUE PIDAMOS
function fetchPokemons(number) {
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

    pokeContainer.appendChild(card)
}
//const crearPokemonCard = (pokemon) => {
//  const pokemonEl = document.createElement('div');
//pokemonEl.classList.add('pokemon');
//const pokeInnerHtml = pokemon.name
//}
fetchPokemons(9)
fetchPokemon()