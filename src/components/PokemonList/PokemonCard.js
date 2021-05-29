import * as React from "react";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FetchPokemon } from '../HandleFetch/fetchData';
import FavoriteIcon from '../FavoriteIcon/FavoriteIcon';
import { parseData } from '../HandleLocalStorage/handleLocalStorage';

const PokemonDetails = ({ pokemonInfo }) => {

  const [getPokemon, setPokemon] = useState(parseData(pokemonInfo.name));
  
  FetchPokemon(pokemonInfo.url, pokemonInfo.name);

    return <Link to={`pokemon/${getPokemon.name}`} className="text-link pokemon-card">
          <div className="d-flex jc-space-evenly">
            <img src={getPokemon.sprites.front_default} alt=""></img>
            <div className="favorite-icon"><FavoriteIcon/></div>
          </div>
          <h3>{pokemonInfo.name.toUpperCase()}</h3>
      </Link>
};

export default PokemonDetails;