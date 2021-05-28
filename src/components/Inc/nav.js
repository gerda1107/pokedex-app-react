import React from "react";
import { Link } from 'react-router-dom';

const Nav = () => {

    return <div className="nav d-flex ai-center">
            <Link to="/" className="text-link nav-title">POKEDEX</Link>
        </div>
    
}

export default Nav;