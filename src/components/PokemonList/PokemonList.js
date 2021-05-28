import * as React from "react";
import { useState, useEffect } from 'react';
import { fetchData } from './fetchData';
import PokemonCard from './PokemonCard';

const PokemonList = () => {

  const [getPokemons, setPokemons] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPokemons('https://pokeapi.co/api/v2/pokemon?limit=15');
  }, []);

  const fetchPokemons = async(url) => {
    const { data: Pokemons } = await fetchData(url);
    if (Pokemons) {
      setPokemons(Pokemons.results);
      setLoading(false);
    }
  }

  return loading ?
    (<div className="spinner"></div>) :
    (<div className="pokemon-container d-flex">
      {getPokemons.map((pokemon, index) =>
      { return <PokemonCard pokemonInfo={pokemon} key={index} /> }
    )}</div>);
};

export default PokemonList;
