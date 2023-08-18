import '../../index.css'
import "./hero-card.css"
import React from 'react';
// IMPORTO LIST EROI
import {heroesList} from './heroes-list'
import './hero-card-behind.css'
import { useContext } from 'react';
import { inventoryContext } from '../../pages/fight'



export default function HeroCardBehind () {

    //PROPS
    const inventory = useContext(inventoryContext);  
      
      
        // Tricolore barra degli hp
        let hpBarColor
        if(inventory.currentHp>=50){
            hpBarColor = 'green'} 
        else if (inventory.currentHp>25 && inventory.currentHp <= 50  ){
            hpBarColor = 'yellow'}
        else if(inventory.currentHp<25){
            hpBarColor = 'red'
        }
       


        return (
            <>
         
            <div className="mt-5"  >
                <img className="card-img-top img-properties BackImg p-3" src={heroesList[0].backImg}  alt="Card image cap" />
                <div className="card-body">

                    <h5 className="card-title">{heroesList[0].name}</h5>

                    <div className='d-flex'>
                        <p className="card-text me-1 "> HP: {inventory.currentHp*heroesList[0].hpMultiplayer}/{heroesList[0].maxHp}</p>

                        {/*  HP BAR */}
                        <div className="hp-bar-container">
                            <div className="hp-bar" style={{ width: `${inventory.currentHp}%`, height: '100%', backgroundColor : `${hpBarColor}` }}>
                                <div className="text-white"></div>
                            </div>
                        </div>

                    </div>
                    <div className='d-flex'>
                   
                    

                    </div>
                </div>
            </div>
            
            </>
        );

         

    
};