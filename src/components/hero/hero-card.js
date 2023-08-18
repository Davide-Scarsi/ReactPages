import '../../index.css'
import "./hero-card.css"
import React from 'react';
import PotionImg from '../../images/potion.png';
import PotionImgG from '../../images/potionG.png';
import { useContext } from 'react';

//IMPORT PROPS
import { inventoryContext } from '../../App'
import { LaterContext } from '../../App'


export default function HeroCard () {
 
        //PROPS
        const inventory = useContext(inventoryContext);
        const Later = useContext(LaterContext);

        let updatedPotionImg = <></>
        if(inventory.potions!==0){
            updatedPotionImg = <img className='img-pozione' src={PotionImg} alt=''/>
        } else updatedPotionImg = <img className='img-pozione' src={PotionImgG} alt=''/>


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

            <div className="card"  >
                <img className="card-img-top img-properties" src={Later.frontImg} alt=''/>
                <div className="card-body">

                    <h5 className="card-title">{Later.name}</h5>

                    <div className='d-flex'>
                        <p className="card-text me-1">{inventory.currentHp*Later.hpMultiplayer}/{Later.maxHp} HP:</p>

                        {/* // HP BAR */}
                        <div className="hp-bar-container">
                            <div className="hp-bar" style={{ width: `${inventory.currentHp}%`, height: '100%', backgroundColor : `${hpBarColor}` , border: `1px solid black`}}>
                                <div className="text-white"></div>
                            </div>
                        </div>

                    </div>
                    <p className="card-text">ATTACK: {Later.attack}</p>
                    <p className="card-text">DEFENCE: {Later.defence}</p>
                    <div className='d-flex'>
                    <p>POTIONS: {inventory.potions}</p>              
                    {updatedPotionImg}
                    

                    </div>
                </div>
            </div>
        );

         

    
};