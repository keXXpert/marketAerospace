import React from 'react';

function Navbar() {
    return (
        <nav className='navbar navbar-dark bg-dark navbar-expand-lg'>
            <div className="container" style={{justifyContent: 'space-between'}}>
                    <a className="navbar-brand" href="/">Aerospace Marketplace</a>
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item active">
                            <a className="nav-link" href="/">Airplanes <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Rotorcraft</a>
                        </li>
                    </ul>
                    <ul className="navbar-nav mr-0 mt-2 mt-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" href="/">Post advert</a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="/">Sign In</a>
                        </li>
                    </ul>
            </div>
        </nav>
    );
}


export default Navbar;
