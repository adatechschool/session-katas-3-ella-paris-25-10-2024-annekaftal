const pokemonData = require("./pokedex.json");
// console.log(pokemonData);
let dataList = [];

function makeObjects(data, list) {
  for (let i = 0; i < data.pokemon.length; i++) {
    list.push(data.pokemon[i]);
  }
}

makeObjects(pokemonData, dataList);
// console.log(dataList);

function countPokemon(data) {
  console.log(data.length);
}

function findHeavyPokemon(data) {
  let heavyPokemon = [];
  for (let i = 0; i < data.length; i++) {
    let weight = data[i].weight;
    let formattedWeight = parseFloat(weight.split(" ")[0]);
    if (formattedWeight > 10) {
      heavyPokemon.push(data[i].name);
    }
  }
  console.log(heavyPokemon);
}

function orderByWeight(data) {
  sortingRounds = data.length;
  sortedData = [];
  for (let i = 0; i < sortingRounds; i++) {
    let heaviest = { weight: "0", pokemon: "", index: "" };
    for (let j = 0; j < data.length; j++) {
      let weight = data[j].weight;
      let formattedWeight = parseFloat(weight.split(" ")[0]);
      if (formattedWeight > heaviest.weight) {
        heaviest.weight = formattedWeight;
        heaviest.pokemon = data[j];
        heaviest.index = j;
      }
    }
    sortedData.unshift(heaviest.pokemon.name);
    data.splice(heaviest.index, 1);
  }
  console.log(sortedData);
}

// countPokemon(dataList);
// findHeavyPokemon(dataList);
orderByWeight(dataList);
