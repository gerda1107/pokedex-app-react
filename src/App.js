import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import PokemonList from "./components/PokemonList/PokemonList";
import PokemonDetails from "./components/PokemonDetails/PokemonDetails";

export default function App() {

  return <Router>
    <Switch>
      <Route exact path="/">
        <PokemonList />
      </Route>
      <Route exact path="/pokemon/:index">
        <PokemonDetails />
      </Route>
    </Switch>
  </Router>
}
