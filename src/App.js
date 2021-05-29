import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import PokemonList from "./components/PokemonList/PokemonList";
import PokemonDetails from "./components/PokemonDetails/PokemonDetails";
import Nav from "./components/Inc/nav";

export default function App() {

  return <Router>
    <Nav/>
    <Switch>
      <Route exact path="/">
        <PokemonList />
      </Route>
      <Route exact path="/pokemon/:name">
        <PokemonDetails />
      </Route>
    </Switch>
  </Router>
}
