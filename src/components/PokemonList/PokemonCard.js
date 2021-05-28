import * as React from "react";
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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

    return loading ? (<div className="spinner"></div>) :
        (<Link to={`pokemon/${getPokemon.id}`} className="text-link pokemon-card">
                <img src={getPokemon.sprites.front_default} alt=""></img>
        <h3>{pokemonInfo.name.toUpperCase()}</h3>
        </Link>);

};

export default PokemonDetails;