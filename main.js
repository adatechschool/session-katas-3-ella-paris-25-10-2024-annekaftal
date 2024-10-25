const pokemonData = require("./pokedex.json");
// console.log(pokemonData);

function countPokemon(data) {
  console.log(data.pokemon.length);
}

function findHeavyPokemon(data) {
  let heavyPokemon = [];
  for (let i = 0; i < data.pokemon.length; i++) {
    let weight = data.pokemon[i].weight;
    let formattedWeight = parseFloat(weight.split(" ")[0]);
    if (formattedWeight > 10) {
      heavyPokemon.push(data.pokemon[i].name);
    }
  }
  console.log(heavyPokemon);
}

countPokemon(pokemonData);
findHeavyPokemon(pokemonData);
