

import React, { useState } from 'react';
import Axios from 'axios';
import './App.css';
function App() {

  const [state, setState] = useState([]);

  const getPokemon = () => {
    Axios.get('https://pokeapi.co/api/v2/pokemon?limit=807')
      .then(res => {
        setState(res.data.results);
      })
      .catch(err => console.log(err))


  }

  return (
    <div className="App">
      <button type="submit" onClick={getPokemon}>Fetch Pokemon</button>

      {}
      {
        state.map((each_pokemon, i) => {
          return <ul><li key={i}>{each_pokemon.name}</li></ul>
        })
      }

    </div>
  );
}

export default App;
