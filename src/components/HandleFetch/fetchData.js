import Axios from 'axios';
import { setDataToStorage } from '../HandleLocalStorage/handleLocalStorage';
const PokemonListUrl = 'https://pokeapi.co/api/v2/pokemon?limit=15';
  
export const fetchData = () => { 
    Axios.get(PokemonListUrl)
        .then((response) => {
            setDataToStorage('pokemon_list', JSON.stringify(response.data.results));
            response.data.results.map(item => {
                return Axios.get(item.url)
                    .then((res) => setDataToStorage(item.name, JSON.stringify(res.data)));
            })
    })
}
