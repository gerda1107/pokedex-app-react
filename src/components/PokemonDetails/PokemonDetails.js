import * as React from "react";
import { useState, useEffect } from 'react';
import { fetchData } from '../PokemonList/fetchData';

const PokemonDetails = () => {

  const pokemonId = window.location.pathname.split('/').pop();

  const [getDetails, setDetails] = useState(null);
  const [loading, setLoading] = useState(true);

    useEffect(() => {
      fetchDetails(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
    }, [])

    const fetchDetails = async(url) => {
        const { data: Details } = await fetchData(url);
        if (Details) {
        setDetails(Details);
        setLoading(false);
        }
  }
  
  return loading ?
    (<div className="spinner"></div>) :
    (<div>dsfsdf</div>);
};

export default PokemonDetails;
