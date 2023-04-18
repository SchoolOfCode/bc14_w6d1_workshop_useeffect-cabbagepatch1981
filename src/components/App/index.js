import React, { useState } from "react";
import "./App.css";

import PokemonViewer from "../PokemonViewer";

function App() {
  const [id, setId] = useState();

  function handleClick() {
    // Task 2 - Set id to be random number between 1 and 151
    const randomId = Math.floor(Math.random() * 151) + 1;
    setId(randomId);
  }

  return (
    <div className="App">
      {/* Task 2 - call handleClick when button clicked */}
      <button onClick={handleClick}>Get Random Pokemon</button>
      {/* Task 2 - hand down id as a prop */}
      <PokemonViewer id={id} />
    </div>
  );
}

export default App;
