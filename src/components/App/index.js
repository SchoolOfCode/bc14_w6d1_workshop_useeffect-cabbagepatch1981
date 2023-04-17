import React, { useState } from "react";
import "./App.css";

import PokemonViewer from "../PokemonViewer";

function App() {
  const [id, setId] = useState();

  function handleClick() {
    // TODO: Set id to be random number between 1 and 151
    setId(151);
  }

  return (
    <div className="App">
      {/* TODO: call handleClick when button clicked */}
      <button>Get Random Pokemon</button>
      {/* TODO: hand down id as a prop */}
      <PokemonViewer />
    </div>
  );
}

export default App;
