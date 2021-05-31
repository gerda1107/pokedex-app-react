import * as React from "react";
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { GetPokemonDetails } from '../HandlePokemonDetails/handlePokemonData';

const PokemonCard = ({ pokemonInfo }) => {
  const [getPokemon, setPokemon] = useState({});
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getPokemonData = async() => {
      let result = await GetPokemonDetails(pokemonInfo.name)
      setPokemon({...result})
      setLoading(false)
    }
    getPokemonData();
  }, [pokemonInfo.name])

  return loading ?
    (<div className="spinner"></div>) :
    (<Link to={`pokemon/${pokemonInfo.name}`} className="text-link">
      <div className="card" style={{ width: '18rem' }}>
        <img src={getPokemon.sprites.front_default} className="bg-dark" alt="..."></img>
        <div className="card-body">
          <p className="text-link">{pokemonInfo.name.toUpperCase()}</p>
        </div>
      </div>
  </Link>)
}

export default PokemonCard;