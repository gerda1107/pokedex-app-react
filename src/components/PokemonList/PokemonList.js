import * as React from "react";
import { useState, useEffect } from 'react';
import Axios from 'axios';

const PokemonList = () => {

  const [getPokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
        fetchList();
  }, [])
  
  const fetchList = async () => {
    await Axios.get('https://pokeapi.co/api/v2/pokemon?limit=15')
      .then(res => { setPokemon(res.data.results); })
      .finally(() => setLoading(false));
  }

  console.log(getPokemon);

  return loading ? (<div>No Pokemon</div>) : (<div>Pokemon list goes here</div>);
};

export default PokemonList;
