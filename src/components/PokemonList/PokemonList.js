import * as React from "react";
import { useState, useEffect } from 'react';
import { GetPokemonsList } from '../HandlePokemonDetails/handlePokemonDetails';
import PokemonCard from './PokemonCard';
import FavoriteIcon from '../FavoriteIcon/FavoriteIcon';

const PokemonList = ({addToFavorite, favorites}) => {

  const [getPokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getAllPokemons = async() => {
      let result = await GetPokemonsList('pokemon_list')
      setPokemons([...result])
      setLoading(false)
    }
    getAllPokemons();
  }, [])


  return loading ?
    (<div className="spinner"></div>) :
    (<div className="pokemon-container d-flex">
      {getPokemons.map((pokemon, index) =>
      {return <div className="pokemon-card" key={index}>
        <PokemonCard pokemonInfo={pokemon} addToFavorite={addToFavorite} />
        <div className="favorite-icon" onClick={() => addToFavorite(pokemon.name)}>
        {favorites.includes(pokemon.name) ?<FavoriteIcon fill={'white'} /> : <FavoriteIcon fill={'none'}/>}</div>
      </div>
      }
    )}</div>);
};

export default PokemonList;
