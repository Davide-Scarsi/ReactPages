import '../../index.css'
import "./hero-card.css"
import React, { Component } from 'react';
import HeroBehind from '../../images/heroBehind.png';
// IMPORTO LIST EROI
import {heroesList} from './heroes-list'



export default class HeroCardBehind extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            inventory: window.localStorage.getItem('INVENTARIO'),
        }

    }

      
      
      render() {

       


        return (

            <div className="mt-5"  >
                <img className="card-img-top img-properties" src={heroesList.Later.backImg}  alt="Card image cap" />
                <div className="card-body">

                    <h5 className="card-title">{heroesList.Later.name}</h5>

                    <div className='d-flex'>
                        <p className="card-text me-1">{JSON.parse(this.state.inventory).currentHp*heroesList.Later.hpMultiplayer}/{heroesList.Later.maxHp} HP:</p>

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