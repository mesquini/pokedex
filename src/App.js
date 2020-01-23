import React, { useEffect, useState } from "react";

import api from "./server/index";

import logo from "./img/logo.png";
import LoadType from "./components/type";

import "./global.css";

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
      <img src={logo} alt="logo" />
      <ul>
        {pokemons.map(p => (
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
