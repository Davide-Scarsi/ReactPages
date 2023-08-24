import "../../index.css"
import "./navbar.css"
import React from 'react'
import { Link } from "react-router-dom";

export default function Navbar ({active}) {

        
        return (
        
        <nav className="navbar navbar-expand-lg bg-body-tertiary p-0">
            <div className="container-fluid nav-container">

                        <ul className="mt-2 navbar-nav vw-100 d-flex justify-content-center aligh-items-center ">
                            <li className="nav-item">
                                <Link className="nav-link navbar-brand d-flex justify-content-center me-0 me-lg-3" style={active.heroColor} to="/"><span>HERO</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link d-flex justify-content-center" style={active.marketColor} to="/market"><span>MARKET</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link d-flex justify-content-center" style={active.fightColor} to="/fight"><span>FIGHT</span></Link>
                            </li>
                        </ul>

                   
                </div>
            
        </nav>
    )
    
};
