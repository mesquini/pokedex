import React, { useEffect, useState } from "react";

import api from "../../server/index";
import "../main/main.css";

export default function Dashboard() {
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
            <img src={p.img} alt="pokemon" />
            <footer>
              <strong>{p.name}</strong>
              <p>Number: {p.num}</p>
              <p>Type: {p.type.map(t => t + ", ")}</p>
              <p>Weaknesses: {p.weaknesses.map(w => w + ", ")}</p>
            </footer>
          </li>
        ))}
      </ul>
    </div>
  );
}
