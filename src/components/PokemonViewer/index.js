import { useState, useEffect } from "react";

function PokemonViewer() {
  const [pokemon, setPokemon] = useState(null);
  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon/1");
      const data = await response.json();
      setPokemon(data);
    }
    fetchData();
  }, []);

  //TODO: Task 1 - send http request to `https://pokeapi.co/api/v2/pokemon/1' and display the data
  // TODO: Task 2 - send http request to `https://pokeapi.co/api/v2/pokemon/${id}` and display the data!
  // HINT: you will need useState and useEffect!
  return <div className="pokemon-viewer">{pokemon && pokemon.name}</div>;
}

export default PokemonViewer;
