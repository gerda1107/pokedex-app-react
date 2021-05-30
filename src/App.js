import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './App.css';
import PokemonList from "./components/PokemonList/PokemonList";
import PokemonDetails from "./components/PokemonDetails/PokemonDetails";
import Nav from "./components/Inc/nav";
import {setDataToStorage, parseData, doesKeyExist} from './components/HandleLocalStorage/handleLocalStorage'

export default function App() {

  const [favorites, setFavorites] = useState([]);
  const getFavorites = parseData('favorites');

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
    setDataToStorage('favorites', favorites);
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
