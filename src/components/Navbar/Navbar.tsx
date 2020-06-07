import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <nav className='navbar navbar-dark bg-dark navbar-expand-lg'>
            <div className="container" style={{ justifyContent: 'space-between' }}>
                <NavLink className="navbar-brand mb-1" to="/">Aerospace Marketplace</NavLink>
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li className="nav-item">
                        <NavLink className="nav-link" activeClassName='active' to="/" exact>Airplanes <span className="sr-only">(current)</span></NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" activeClassName='active' to="/rotor">Rotorcraft</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" activeClassName='active' to="/spare">Spare Parts</NavLink>
                    </li>
                </ul>
                <ul className="navbar-nav mr-0 mt-2 mt-lg-0">
                    <li className="nav-item">
                        <NavLink className="nav-link" activeClassName='active' to="/post">Post advert</NavLink>
                    </li>
                    <li className="nav-item active">
                        <NavLink className="nav-link" activeClassName='active' to="/login">Sign In</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
}


export default Navbar;
