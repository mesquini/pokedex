import React, { useEffect, useState } from "react";
import api from "./server/index";
import logo from "./img/logo.png";
import LoadType from "./components/type";
import "./global.css";

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [q, setQ] = useState([]);

  useEffect(() => {
    async function loadPokemons() {
      const { data } = await api.get();
      setPokemons(data.pokemon);
    }
    loadPokemons();
  }, []);

  const filteredPokemons = () =>
    q ? pokemons.filter(p => p.name.indexOf(q) > -1) : pokemons;

  return (
    <div className="main-conteiner">
      <img src={logo} alt="logo" />
      <input
        value={q}
        onChange={e =>
          setQ(e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1))
        }
        autoCapitalize
        placeholder="Enter the name of the pokemon"
      />
      <ul>
        {filteredPokemons().map(p => (
          <li key={p.id}>
            <img className="pokemon" src={p.img} alt="pokemon" />
            <footer>
              <strong>{p.name}</strong>
              <p>Number: {p.num}</p>
              <p>Type:</p> <LoadType type={p.type} />
              <p>Weaknesses: {p.weaknesses.join(", ")}</p>
            </footer>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default App;
