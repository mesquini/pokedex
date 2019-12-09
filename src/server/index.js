import axios from 'axios'

const api = axios.create({
    baseURL : 'https://raw.githubusercontent.com/Biuni/PokemonGo-Pokedex/master/pokedex.json'
})

export default api;