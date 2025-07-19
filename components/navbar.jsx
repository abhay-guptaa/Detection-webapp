import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import logo from "../src/assets/Logo.gif";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary nv1">
            <div className="container-fluid">
                <a className="navbar-brand p-2" href="./">
                    <img src={logo} alt="Logo" width="45" height="40" className="d-inline-block m-1 align-text-top" />
                    Detection Machine
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="./">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/features">Features</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Machines
                            </a>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" to="/mask">Mask Detection</Link></li>
                                <li><Link className="dropdown-item" to="/expression">Expression Detection</Link></li>
                                <li><Link className="dropdown-item" to="/gender">Gender Detection</Link></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
