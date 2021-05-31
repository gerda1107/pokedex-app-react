import * as React from "react";
import { useState, useEffect } from 'react';
import {ApiURL, GetPokemonDetails} from '../HandlePokemonDetails/handlePokemonDetails'
import StatsTable from './StatsTable';
import FavoriteIcon from '../FavoriteIcon/FavoriteIcon';

const PokemonDetails = ({addToFavorite, favorites}) => {

  const pokemonName = window.location.pathname.split('/').pop();
  const [getDetails, setDetails] = useState({});
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getPokemonData = async() => {
      let result = await GetPokemonDetails(pokemonName, `${ApiURL}pokemon/${pokemonName}`)
      setDetails({...result})
      setLoading(false)
    }
    getPokemonData();
  }, [])

  return loading ? (<div className="spinner"></div>) :
  (<div className="jc-center d-flex">
    <div className="details-container d-flex jc-space-evenly">
      <div className="d-flex jc-space-evenly details-img">
        <img src={getDetails.sprites.front_default} alt=""></img>
        <div className="favorite-icon" onClick={() => addToFavorite(pokemonName)}>
          {favorites.includes(pokemonName) ? <FavoriteIcon fill={'white'} /> : <FavoriteIcon fill={'none'}/>}
        </div>
      </div>

      <div className="details-info">
        <h3>{getDetails.name.toUpperCase()}</h3>
        <div className="d-flex jc-space-between">
          <div>
            <h5>TYPE</h5>
            <div className="d-flex jc-space-evenly">{getDetails.types.map((type, index) => {
              return <p key={index}>{type.type.name}</p>})}</div>
          </div>
          <div>
            <h5>ABILITIES</h5>
            <div className="d-flex jc-space-evenly">{getDetails.abilities.map((ability, index) => {
              return <p key={index}>{ability.ability.name}</p>})}</div>
          </div>
        </div>
        <StatsTable getDetails={getDetails}/>
      </div>
  </div>
</div>);
};

export default PokemonDetails;
