import React from "react";
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useState, useEffect } from 'react';
import {WriteToLocalStorage, ReadFromLocalStorage} from './components/HandleLocalStorage/handleLocalStorage'
import Nav from "./components/Inc/nav";
import PokemonList from "./components/PokemonList/PokemonList";
import PokemonDetails from "./components/PokemonDetails/PokemonDetails";

export default function App() {

  const [favorites, setFavorites] = useState([]);
  const getFavorites = ReadFromLocalStorage('favorites');

  useEffect(() => {
    if (getFavorites !== null) {
      setFavorites([...getFavorites])
    }
  }, [])

  const addToFavorite = (name) => {
    let updatedFavoriteList = favorites;
    let addArrTrigger = true;
        updatedFavoriteList.map((item, index) => {
        if (item === name) {
          updatedFavoriteList.splice(index, 1);
          addArrTrigger = false;
      }});
      if (addArrTrigger) {
        updatedFavoriteList.push(name);
      }
    setFavorites([...updatedFavoriteList]);
    WriteToLocalStorage('favorites', favorites);
  }

  return <Router>
    <Nav/>
    <Switch>
      <Route exact path="/">
        <PokemonList addToFavorite={addToFavorite} favorites={favorites}/>
      </Route>
      <Route exact path="/pokemon/:name">
        <PokemonDetails addToFavorite={addToFavorite} favorites={favorites}/>
      </Route>
    </Switch>
  </Router>
}
