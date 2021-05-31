import * as React from "react";
import { Link } from 'react-router-dom';
import { parseData } from '../HandleLocalStorage/handleLocalStorage';

const PokemonCard = ({ pokemonName }) => {  
  const getPokemon = parseData(pokemonName);

  return <Link to={`pokemon/${pokemonName}`} className="text-link">
          <div className="d-flex jc-space-evenly">
            <img src={getPokemon.sprites.front_default} alt=""></img>
          </div>
          <h3>{pokemonName.toUpperCase()}</h3>
  </Link>
};

export default PokemonCard;