import '../../index.css'
import "./monster-card.css"
import React, { Component } from 'react';



export default class MonsterCard extends Component {

    constructor(props) {
        super(props);

      }

      
      
      render() {

  
        return (

            <div className="ms-5"  >
                <img className="card-img-top img-properties" src={this.props.monsterCard.img} alt="Card image cap" />
                <div className="card-body">

                    <h5 className="card-title">{this.props.monsterCard.name}</h5>

                    <div className='d-flex'>
                        <p className="card-text me-1">{(this.props.mobStats.mobCurrentHp)*(this.props.monsterCard.hpMultiplayer)}/{this.props.monsterCard.maxHp} HP:</p>

                        {/* // HP BAR */}
                        <div className="monster-hp-bar-container">
                            <div className="monster-hp-bar" style={{ width: `${this.props.mobStats.mobCurrentHp}%` }}>
                                <div className="text-white"></div>
                            </div>
                        </div>

                    </div>
                    <p className="card-text">ATTACCO: {this.props.monsterCard.attack}</p>
                    <p className="card-text">DIFESA: {this.props.monsterCard.defence}</p>
               
                </div>
            </div>
        );

         

    }
};