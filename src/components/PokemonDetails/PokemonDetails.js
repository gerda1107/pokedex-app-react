import * as React from "react";
import FavoriteIcon from '../FavoriteIcon/FavoriteIcon';
import { parseData } from '../HandleLocalStorage/handleLocalStorage';
import StatsTable from './StatsTable';

const PokemonDetails = ({addToFavorite}) => {

  const pokemonName = window.location.pathname.split('/').pop();
  const getDetails = parseData(pokemonName);
  const favorites = parseData('favorites');
  
  return <div className="jc-center d-flex">
    <div className="details-container d-flex jc-space-evenly">
      <div className="d-flex jc-space-evenly details-img">
        <img src={getDetails.sprites.front_default} alt=""></img>
        <div className="favorite-icon" onClick={() => addToFavorite(pokemonName)}>
          {favorites.includes(pokemonName) ? <FavoriteIcon fill={'white'} /> : <FavoriteIcon fill={'none'} />}
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
</div>;
};

export default PokemonDetails;
