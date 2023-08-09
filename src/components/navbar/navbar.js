import "./navbar.css"
import React from 'react'
import { Link } from "react-router-dom";

export default function Navbar() {

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary ">
            <div className="container-fluid ">

                        <ul className="navbar-nav vw-100 d-flex justify-content-center aligh-items-center">
                            <li className="nav-item">
                                <Link className="nav-link navbar-brand" to="/">Hero</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link " to="/pagina1">Store</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link " to="/pagina2">Fight</Link>
                            </li>
                        </ul>

                   
                </div>
            
        </nav>
    )

};