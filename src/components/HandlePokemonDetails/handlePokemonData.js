import Axios from 'axios';
import { ReadFromLocalStorage, WriteToLocalStorage} from '../HandleLocalStorage/handleLocalStorage';
const ApiURL = 'https://pokeapi.co/api/v2/';
const PokemonListEndpoint = 'pokemon?limit=15';
  
export const GetPokemonsList = async () => {
    let result = await ReadFromLocalStorage('pokemon_list');
    if (!result) {
        result = await Axios.get(ApiURL + PokemonListEndpoint)
         .then((response) => {
             WriteToLocalStorage('pokemon_list', response.data.results)
            return response.data.results;
         })
    };
    return result;
}

export const GetPokemonDetails = async (pokemonName) => {
    let result = await ReadFromLocalStorage(pokemonName);
    if (!result) {
        result = await Axios.get(`${ApiURL}pokemon/${pokemonName}`)
         .then((response) => {
             WriteToLocalStorage(pokemonName, response.data)
            return response.data;
        })};
    return result;
}
