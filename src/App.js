import React, { useEffect, useState } from "react";
import api from "./server/index";
import logo from "./img/logo.png";
import LoadType from "./components/type";

import { TextField, Grow, Paper } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";

import "./global.css";

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [q, setQ] = useState([]);
  const [rollback, setRollback] = useState([]);

  useEffect(() => {
    async function loadPokemons() {
      const { data } = await api.get();
      setPokemons(data.pokemon);
    }
    loadPokemons();
  }, []);

  const filteredPokemons = () =>
    q ? pokemons.filter(p => p.name.indexOf(q) > -1) : pokemons;

  const selectedTypes = () => {
    const arr = pokemons.map(p => p.type[0].toString());
    const newArr = [...new Set(arr)];
    return newArr;
  };

  function filteredType(value) {
    if (value) {
      /*const arr = pokemons.map(p => {
        const a = p.type.map(t => t === value && t);
        if (a[0] !== false && a[1] !== false) return p;
      });*/
      const arr = pokemons.map(p => {
        if (p.type.length === 2) {
          const bool = p.type[0] === value || p.type[1] === value;
          return bool && p;
        } else {
          const bool = p.type[0] === value;
          return bool && p;
        }
      });

      const arrayPokemons = [...new Set(arr)].splice(1, arr.length);

      setRollback(pokemons);
      setPokemons(arrayPokemons);
    } else {
      setPokemons(rollback);
    }
  }

  return (
    <div className="main-conteiner">
      <img src={logo} alt="logo" className="logo" />
      <div className="inputs">
        <TextField
          className="input"
          id="standard-basic"
          label="Enter the name of the pokemon"
          value={q}
          onChange={e =>
            setQ(
              e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1)
            )
          }
        />
        <Autocomplete
          className="autoComplete"
          id="tags-standard"
          options={pokemons.length > 1 ? selectedTypes() : []}
          //getOptionLabel={option => option.name}
          onChange={(e, value) => filteredType(value)}
          renderInput={params => (
            <TextField
              {...params}
              variant="standard"
              label="Select type"
              placeholder="Favorites"
              fullWidth
            />
          )}
        />
      </div>
      <ul>
        {filteredPokemons().map(p => (
          <Grow
            in={true}
            key={p.id}
            style={{ transformOrigin: "0 0 0" }}
            {...(true ? { timeout: 1000 } : {})}
          >
            <Paper elevation={4}>
              <li>
                <img className="pokemon" src={p.img} alt="pokemon" />
                <footer>
                  <strong>{p.name}</strong>
                  <p>Number: {p.num}</p>
                  <p>Type:</p> <LoadType type={p.type} />
                  <p>Weaknesses: {p.weaknesses.join(", ")}</p>
                </footer>
              </li>
            </Paper>
          </Grow>
        ))}
      </ul>
    </div>
  );
}
export default App;
