import * as React from "react";
import { useState, useEffect } from 'react';
import { GetPokemonsList } from '../HandlePokemonDetails/handlePokemonData';
import PokemonCard from './PokemonCard';
import FavoriteIcon from '../FavoriteIcon/FavoriteIcon';

const PokemonList = ({addToFavorite, favorites}) => {

  const [getPokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getAllPokemons = async() => {
      let pokemons = await GetPokemonsList()
      setPokemons([...pokemons])
      setLoading(false)
    }
    getAllPokemons();
  }, [])

  return loading ?
    (<div className="spinner"></div>) :
    (<div className="pokemon-container d-flex flex-wrap">
      {getPokemons.map(pokemon =>
        {return <div className="pokemon-card" key={pokemon.name}>
          <PokemonCard pokemonInfo={pokemon}/>
          <div className="favorite-icon" onClick={() => addToFavorite(pokemon.name)}>
            {favorites.includes(pokemon.name) ? <FavoriteIcon fill={'#fcbf49'} /> : <FavoriteIcon fill={'none'}/>}
          </div>
        </div>}
    )}</div>);
};

export default PokemonList;
