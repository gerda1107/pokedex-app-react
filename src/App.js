import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import PokemonList from "./components/PokemonList/PokemonList";
import PokemonDetails from "./components/PokemonDetails/PokemonDetails";
import Nav from "./components/Inc/nav";
import {setDataToStorage, parseData} from './components/HandleLocalStorage/handleLocalStorage'

export default function App() {

  const [favorites, setFavorites] = useState(parseData('favorites'));

  const addToFavorite = (name) => {
    let updatedFavoriteList = favorites;
    let addArrTrigger = true;
    updatedFavoriteList.map((item, index) => {
      if (item === name) {
        updatedFavoriteList.splice(index, 1);
        addArrTrigger = false;
      }
    });
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
        <PokemonList addToFavorite={addToFavorite}/>
      </Route>
      <Route exact path="/pokemon/:name">
        <PokemonDetails addToFavorite={addToFavorite}/>
      </Route>
    </Switch>
  </Router>
}
