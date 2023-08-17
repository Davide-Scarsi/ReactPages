import '../../index.css'
import "./monster-card.css"
import React from 'react';
//IMPORT PROPS
import { monsterFromListContext } from '../../pages/fight'
import { mobStatsContext } from '../../pages/fight'
import { mobImgContext } from '../../pages/fight'
import { useContext } from 'react';





export default function MonsterCard () {

        //PROPS
        const monsterFromList = useContext(monsterFromListContext);
        const mobStats = useContext(mobStatsContext);
        const mobImg = useContext(mobImgContext);
     
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
                
                <img className="card-img-top " src={mobImg} alt="" />
                <div className="card-body">

                    <h5 className="card-title">{monsterFromList.name}</h5>

                    <div className='d-flex'>
                        <p className="card-text me-1">HP: {(mobStats.mobCurrentHp)*(monsterFromList.hpMultiplayer)}/{monsterFromList.maxHp} </p>

                        {/* // HP BAR */}
                        <div className="monster-hp-bar-container">
                            <div className="monster-hp-bar" style={{ width: `${mobStats.mobCurrentHp}%`, border: `1px solid black` , backgroundColor: `${hpBarColor}` }}>
                                <div className="text-white"></div>
                            </div>
                        </div>

                    </div>
                    <p className="card-text">ATTACCO: {monsterFromList.attack}</p>
                    <p className="card-text">DIFESA: {monsterFromList.defence}</p>
               
                </div>
            </div>
        );

         
};