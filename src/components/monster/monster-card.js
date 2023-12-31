import '../../index.css'
import "./monster-card.css"
import React from 'react';


export default function MonsterCard ({mobCard, mobStats, mobImg}) {

       
     
          // Tricolore barra degli hp
          let hpBarColor
          if(mobStats.mobCurrentHp>=50){
              hpBarColor = 'green'} 
          else if (mobStats.mobCurrentHp>25 && mobStats.mobCurrentHp <= 50  ){
              hpBarColor = 'yellow'}
          else if(mobStats.mobCurrentHp<25){
              hpBarColor = 'red'
          }

         
     
        return (

            <div className="ms-5"  >
                
                <img className="card-img-top mobImg" src={mobImg} alt="" />
                <div className="card-body ">

                    <h5 className="card-title ">{mobCard.name}</h5>

                    <div className='d-flex flex-column flex-sm-row'>
                        <p className="card-text me-1">HP: {Math.round((mobStats.mobCurrentHp)*(mobCard.hpMultiplayer))}/{mobCard.maxHp} </p>

                        {/* // HP BAR */}
                        <div className="monster-hp-bar-container">
                            <div className="monster-hp-bar" style={{ width: `${mobStats.mobCurrentHp}%`, border: `1px solid black` , backgroundColor: `${hpBarColor}` }}>
                                <div className="text-white"></div>
                            </div>
                        </div>

                    </div>
                    <p className="card-text d-none d-md-block">ATTACK: {mobCard.attack}</p> 
                    <p className="card-text d-none d-md-block">DEFENCE: {mobCard.defence}</p>
               
                </div>
            </div>
        );

         
};