import "./navbar.css"
import React, {Component} from 'react'
import { Link } from "react-router-dom";

export default class Navbar extends Component {


    constructor(props) {
        super(props);

      }
    
    render(){

        
        return (
        
        <nav className="navbar navbar-expand-lg bg-body-tertiary ">
            <div className="container-fluid ">

                        <ul className="navbar-nav vw-100 d-flex justify-content-center aligh-items-center">
                            <li className="nav-item">
                                <Link className="nav-link navbar-brand" style={this.props.active.heroColor} to="/">Hero</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link " style={this.props.active.marketColor} to="/market">Market</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link " style={this.props.active.fightColor} to="/fight">Fight</Link>
                            </li>
                        </ul>

                   
                </div>
            
        </nav>
    )
    }
};
