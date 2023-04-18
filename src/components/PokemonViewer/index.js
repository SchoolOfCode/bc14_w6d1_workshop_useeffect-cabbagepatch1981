//   //TODO: Task 1 - send http request to `https://pokeapi.co/api/v2/pokemon/1' and display the data
//   // TODO: Task 2 - send http request to `https://pokeapi.co/api/v2/pokemon/${id}` and display the data!
//   // HINT: you will need useState and useEffect!
//   return <div className="pokemon-viewer">{pokemon && pokemon.name}</div>;
// }

// export default PokemonViewer;

import { useState, useEffect } from "react";

function PokemonViewer({ id }) {
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      const data = await response.json();
      console.log(data); // Log the data to make sure it's working correctly
      setPokemon(data);
    }
    fetchData();
  }, [id]);

  return (
    <div className="pokemon-viewer">
      {pokemon && (
        <div>
          <h2>{pokemon.name}</h2>
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        </div>
      )}
    </div>
  );
}

export default PokemonViewer;
