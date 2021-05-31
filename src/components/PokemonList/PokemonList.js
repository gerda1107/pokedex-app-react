import * as React from "react";
import { useState, useEffect } from 'react';
import { fetchData } from '../HandleFetch/fetchData';
import PokemonCard from './PokemonCard';
import { parseData } from '../HandleLocalStorage/handleLocalStorage';
import FavoriteIcon from '../FavoriteIcon/FavoriteIcon';

const PokemonList = ({addToFavorite, favorites}) => {

  const [getPokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);
  const pokemons = parseData('pokemon_list');

  useEffect(() => {
    if (pokemons !== null) {
      setPokemons([...pokemons]);
      setLoading(false);
    }
    fetchData();
  }, [])

  return loading ?
    (<div className="spinner"></div>) :
    (<div className="pokemon-container d-flex">
      {getPokemons.map((pokemon, index) =>
      {return <div className="pokemon-card" key={index}>
        <PokemonCard pokemonName={pokemon.name} addToFavorite={addToFavorite} />
        <div className="favorite-icon" onClick={() => addToFavorite(pokemon.name)}>
        {favorites.includes(pokemon.name) ?<FavoriteIcon fill={'white'} /> : <FavoriteIcon fill={'none'}/>}</div>
      </div>
      }
    )}</div>);
};

export default PokemonList;
