import * as React from "react";
import { useState, useEffect } from 'react';
import Axios from 'axios';

const PokemonDetails = ({ pokemonInfo }) => {

    const [getPokemon, setPokemon] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchPokemon();   
    }, []);
    
    const fetchPokemon = async () => {
    await Axios.get(`${pokemonInfo.url}`)
        .then(res => {
            setPokemon(res.data);
        })
        .finally(() => setLoading(false));
    }
    
    return loading ? (<div>no data</div>) :
        (<div>
        <h3>{pokemonInfo.name}</h3>
        <img src={getPokemon.sprites.front_default} alt=""></img>
    </div>);
};

export default PokemonDetails;