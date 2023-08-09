import '../../index.css'
import "./hero-card.css"
import React, { Component } from 'react';
import LaterImg from '../../images/Later.png';

// Later
const Later = {
    name: "Later",
    maxHp: 500,
    img: LaterImg,
    attack: 80,
    defence: 10
}




export default class HeroCard extends Component {

    constructor(props) {
        super(props);

      }
      

    render() {
        return (

            <div className="card"  >
                <img className="card-img-top img-properties" src={Later.img} alt="Card image cap" />
                <div className="card-body">

                    <h5 className="card-title">{Later.name}</h5>

                    <div className='d-flex'>
                        <p className="card-text me-1">{this.props.hp*5}/{Later.maxHp} HP:</p>

                        {/* // HP BAR */}
                        <div className="hp-bar-container">
                            <div className="hp-bar" style={{ width: `${this.props.hp}%` }}>
                                <div className="text-white"></div>
                            </div>
                        </div>

                    </div>
                    <p className="card-text">ATTACCO: {Later.attack}</p>
                    <p className="card-text">DIFESA: {Later.defence}</p>

                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        );
    }
};