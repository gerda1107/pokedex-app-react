import * as React from "react";
import { useState, useEffect } from 'react';
import { fetchData } from './fetchData';

const PokemonDetails = ({ pokemonInfo }) => {

    const [getPokemon, setPokemon] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      fetchPokemon(pokemonInfo.url);
    }, [])

    const fetchPokemon = async(url) => {
        const { data: Pokemon } = await fetchData(url);
        if (Pokemon) {
        setPokemon(Pokemon);
        setLoading(false);
        }
    }
    
    return loading ? (<div>no data</div>) :
        (<div className="pokemon-card">
            <img src={getPokemon.sprites.front_default} alt=""></img>
            <h3>{pokemonInfo.name.toUpperCase()}</h3>
    </div>);
};

export default PokemonDetails;