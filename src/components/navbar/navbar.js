import "./navbar.css"
import React from 'react'
import { Link } from "react-router-dom";

export default function Navbar() {

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link active" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" to="/pagina1">Pagina 1</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" to="/pagina2">Pagina 2</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" to="/pagina3">Pagina 3</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )

};