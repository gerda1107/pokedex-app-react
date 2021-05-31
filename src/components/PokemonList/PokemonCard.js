import * as React from "react";
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { GetPokemonDetails } from '../HandlePokemonDetails/handlePokemonDetails';

const PokemonCard = ({ pokemonInfo }) => {
  const [getPokemon, setPokemon] = useState({});
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getPokemonData = async() => {
      let result = await GetPokemonDetails(pokemonInfo.name, pokemonInfo.url)
      setPokemon({...result})
      setLoading(false)
    }
    getPokemonData();
  }, [])

  return loading ? (<div className="spinner"></div>) :
    (<Link to={`pokemon/${pokemonInfo.name}`} className="text-link">
          <div className="d-flex jc-space-evenly">
            <img src={getPokemon.sprites.front_default} alt=""></img>
          </div>
          <h3>{pokemonInfo.name.toUpperCase()}</h3>
  </Link>)
}

export default PokemonCard;