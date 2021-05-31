import Axios from 'axios';
import { DoesExistInLocalStorage, WriteToLocalStorage} from '../HandleLocalStorage/handleLocalStorage';
export const ApiURL = 'https://pokeapi.co/api/v2/';
const PokemonListEndpoint = 'pokemon?limit=15';
  
export const GetPokemonsList = async (key) => {
    let result = DoesExistInLocalStorage(key);
    if (!result) {
        result = await Axios.get(ApiURL + PokemonListEndpoint)
         .then((response) => {
           WriteToLocalStorage(key, response.data.results)
            return response.data.results;
         })};
    return result;
}

export const GetPokemonDetails = async (key, url) => {
    let result = DoesExistInLocalStorage(key);
    if (!result) {
        result = await Axios.get(url)
         .then((response) => {
           WriteToLocalStorage(key, response.data)
            return response.data;
        })};
    return result;
}
