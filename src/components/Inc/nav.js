import React from "react";
import { Link } from 'react-router-dom';

const Nav = () => {
    return <div className="nav bg-dark">
        <Link to="/" className="nav-title">POKEDEX</Link>
    </div>
}

export default Nav;