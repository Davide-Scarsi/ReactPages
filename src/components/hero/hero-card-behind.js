import '../../index.css'
import "./hero-card.css"
import React, { Component } from 'react';
// IMPORTO LIST EROI
import {heroesList} from './heroes-list'



export default class HeroCardBehind extends Component {

    constructor(props) {
        super(props);
        
      
    }

      
      
      render() {

        // Tricolore barra degli hp
        let hpBarColor
        if(this.props.inventory.currentHp>=50){
            hpBarColor = 'green'} 
        else if (this.props.inventory.currentHp>25 && this.props.inventory.currentHp <= 50  ){
            hpBarColor = 'yellow'}
        else if(this.props.inventory.currentHp<25){
            hpBarColor = 'red'
        }
       


        return (

            <div className="mt-5"  >
                <img className="card-img-top img-properties" src={heroesList.Later.backImg}  alt="Card image cap" />
                <div className="card-body">

                    <h5 className="card-title">{heroesList.Later.name}</h5>

                    <div className='d-flex'>
                        <p className="card-text me-1">{this.props.inventory.currentHp*heroesList.Later.hpMultiplayer}/{heroesList.Later.maxHp} HP:</p>

                        {/* // HP BAR */}
                        <div className="hp-bar-container">
                            <div className="hp-bar" style={{ width: `${this.props.inventory.currentHp}%`, height: '100%', backgroundColor : `${hpBarColor}` }}>
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