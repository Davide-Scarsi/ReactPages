import '../../index.css'
import "./hero-card.css"
import React from 'react';
import PotionImg from '../../images/potion.png';
import PotionImgG from '../../images/potionG.png';



export default function HeroCard ({heroCard, inventory}) {
 

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
                <img className="card-img-top img-properties" src={heroCard.frontImg} alt=''/>
                <div className="card-body">

                    <h5 className="card-title">{heroCard.name}</h5>

                    <div className='d-flex'>
                        <p className="card-text me-1">{inventory.currentHp*heroCard.hpMultiplayer}/{heroCard.maxHp} HP:</p>

                        {/* // HP BAR */}
                        <div className="hp-bar-container">
                            <div className="hp-bar" style={{ width: `${inventory.currentHp}%`, height: '100%', backgroundColor : `${hpBarColor}` , border: `1px solid black`}}>
                                <div className="text-white"></div>
                            </div>
                        </div>

                    </div>
                    {inventory.status &&                   
                    <p className="card-text">STATUS: {inventory.status}</p>
                    }
                    <p className="card-text">ATTACK: {heroCard.attack}</p>
                    <p className="card-text">DEFENCE: {heroCard.defence}</p>
                    <div className='d-flex'>
                    <p>POTIONS: {inventory.potions}</p>              
                    {updatedPotionImg}
                    

                    </div>
                </div>
            </div>
        );

         

    
};