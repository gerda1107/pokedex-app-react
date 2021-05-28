import * as React from "react";
import { useState, useEffect } from 'react';
import { fetchData } from '../PokemonList/fetchData';
import FavoriteIcon from '../FavoriteIcon/FavoriteIcon';

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
    (<div className="jc-center d-flex">
      <div className="details-container d-flex jc-space-evenly">
        <div className="d-flex jc-space-evenly details-img">
          <img src={getDetails.sprites.front_default} alt=""></img>
          <div className="favorite-icon"><FavoriteIcon/></div>
      </div>

      <div className="details-info">
          <h3>{getDetails.name.toUpperCase()}</h3>
          <div></div>
      </div>
    </div>
      

    </div>);
};

export default PokemonDetails;
