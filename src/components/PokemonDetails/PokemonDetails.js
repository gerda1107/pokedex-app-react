import * as React from "react";
import { useState, useEffect } from 'react';
import {GetPokemonDetails} from '../HandlePokemonDetails/handlePokemonData'
import StatsTable from './StatsTable';
import FavoriteIcon from '../FavoriteIcon/FavoriteIcon';

const PokemonDetails = ({addToFavorite, favorites}) => {

  const pokemonName = window.location.pathname.split('/').pop();
  const [getDetails, setDetails] = useState({});
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getPokemonData = async() => {
      let pokemonDetails = await GetPokemonDetails(pokemonName)
      setDetails({...pokemonDetails})
      setLoading(false)
    }
    getPokemonData();
  }, [pokemonName])

  return loading ?
    (<div className="spinner"></div>) :
    (<div className="pokemon-container d-flex justify-content-around">
        <div className="card">
          <img className="bg-dark" src={getDetails.sprites.front_default} alt=""></img>
          <div className="favorite-icon" onClick={() => addToFavorite(pokemonName)}>
            {favorites.includes(pokemonName) ? <FavoriteIcon fill={'#fcbf49'} /> : <FavoriteIcon fill={'none'}/>}
          </div>
          <div className="card-body">
            <p className="text-link">{getDetails.name.toUpperCase()}</p>
          </div>
        </div>

        <div className="details-info pt-4">
          <div className="d-flex justify-content-around">
            <div>
              <h4>TYPE</h4>
              <div>{getDetails.types.map((type, index) => {
                return <span className='p-2 m-1' style={{backgroundColor:'#E07A5F'}} key={index}>{type.type.name}</span>})}</div>
            </div>
            <div>
              <h4>ABILITIES</h4>
              <div>{getDetails.abilities.map((ability, index) => {
                return <span className='p-2 m-1' style={{backgroundColor:'#F2CC8F'}} key={index}>{ability.ability.name}</span>})}</div>
            </div>
          </div>
          <StatsTable getDetails={getDetails}/>
        </div>
    </div>
  );
};

export default PokemonDetails;
