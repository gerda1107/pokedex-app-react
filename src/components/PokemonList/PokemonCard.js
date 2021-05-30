import * as React from "react";
import { Link } from 'react-router-dom';
import { FetchPokemon } from '../HandleFetch/fetchData';
import { parseData } from '../HandleLocalStorage/handleLocalStorage';

const PokemonCard = ({ pokemonInfo }) => {
  const getPokemon = parseData(pokemonInfo.name);
  
  FetchPokemon(pokemonInfo.url, pokemonInfo.name);

  return <Link to={`pokemon/${getPokemon.name}`} className="text-link">
          <div className="d-flex jc-space-evenly">
            <img src={getPokemon.sprites.front_default} alt=""></img>
          </div>
          <h3>{pokemonInfo.name.toUpperCase()}</h3>
  </Link>
};

export default PokemonCard;