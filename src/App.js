import React, { useEffect, useState } from "react";

import api from "./server/index";
import "./global.css";

import LoadType from "./components/type";

export default function App() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    async function loadPokemons() {
      const { data } = await api.get();
      setPokemons(data.pokemon);
    }
    loadPokemons();
  }, []);

  return (
    <div className="main-conteiner">
      <h1>Pokedex da primeira geração</h1>
      <ul>
        {pokemons.map(p => (
          <li key={p.id}>
            <img className="pokemon" src={p.img} alt="pokemon" />
            <footer>
              <strong>{p.name}</strong>
              <p>Number: {p.num}</p>
              <LoadType type={p.type} />
              <p>Weaknesses: {p.weaknesses.join(", ")}</p>
            </footer>
          </li>
        ))}
      </ul>
    </div>
  );
}
