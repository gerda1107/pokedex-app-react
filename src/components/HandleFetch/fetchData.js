import Axios from 'axios';
import { setDataToStorage, doesKeyExist } from '../HandleLocalStorage/handleLocalStorage';

const fetchData = async (url) => {
    return await Axios.get(url);
}

export const FetchPokemons = async(url, key) => {
    const { data: Pokemons } = await fetchData(url);
    if (Pokemons) {
        setDataToStorage(key, JSON.stringify(Pokemons.results));
    }
}
  
export const FetchPokemon = async(url, key) => {
    const { data: Pokemon } = await fetchData(url);
    if (Pokemon && !doesKeyExist(key)) {
        setDataToStorage(key, JSON.stringify(Pokemon));
    }
  }
