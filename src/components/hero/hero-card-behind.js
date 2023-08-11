import '../../index.css'
import "./hero-card.css"
import React, { Component } from 'react';
import HeroBehind from '../../images/heroBehind.png';
import PotionImg from '../../images/potion.png';
import PotionImgG from '../../images/potionG.png';

// Later
const Later = {
    name: "Later",
    maxHp: 500,
    hpMultiplayer: 5,
    img: HeroBehind,
    attack: 80,
    defence: 10
}



export default class HeroCardBehind extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            inventory: window.localStorage.getItem('INVENTARIO'),
        }

    }

      
      
      render() {

       


        return (

            <div className="card"  >
                <img className="card-img-top img-properties" src={Later.img}  alt="Card image cap" />
                <div className="card-body">

                    <h5 className="card-title">{Later.name}</h5>

                    <div className='d-flex'>
                        <p className="card-text me-1">{JSON.parse(this.state.inventory).currentHp*Later.hpMultiplayer}/{Later.maxHp} HP:</p>

                        {/* // HP BAR */}
                        <div className="hp-bar-container">
                            <div className="hp-bar" style={{ width: `${JSON.parse(this.state.inventory).currentHp}%` }}>
                                <div className="text-white"></div>
                            </div>
                        </div>

                    </div>
                    <div className='d-flex'>
                   
                    

                    </div>
                </div>
            </div>
        );

         

    }
};