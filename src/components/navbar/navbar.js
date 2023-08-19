import "./navbar.css"
import React from 'react'
import { Link } from "react-router-dom";

export default function Navbar ({active}) {

        
        return (
        
        <nav className="navbar navbar-expand-lg bg-body-tertiary ">
            <div className="container-fluid ">

                        <ul className="navbar-nav vw-100 d-flex justify-content-center aligh-items-center">
                            <li className="nav-item">
                                <Link className="nav-link navbar-brand d-flex justify-content-center me-0 me-lg-3" style={active.heroColor} to="/"><span>Hero</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link d-flex justify-content-center" style={active.marketColor} to="/market"><span>Market</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link d-flex justify-content-center" style={active.fightColor} to="/fight"><span>Fight</span></Link>
                            </li>
                        </ul>

                   
                </div>
            
        </nav>
    )
    
};
