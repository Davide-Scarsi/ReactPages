import '../../index.css'
import "./hero-card.css"
import React from 'react';
import PotionImg from '../../images/potion.png';
import PotionImgG from '../../images/potionG.png';
import AntidoteImg from '../../images/antidote.png';
import AntidoteImgG from '../../images/antidoteG.png';



export default function HeroCard({ heroCard, inventory, callBack }) {


    let updatedPotionImg = <></>
    if (inventory.potions !== 0) {
        updatedPotionImg = <img className='img-pozione' src={PotionImg} alt='' />
    } else updatedPotionImg = <img className='img-pozione' src={PotionImgG} alt='' />

    let updatedAntidoteImg = <></>
    if (inventory.antidote !== 0) {
        updatedAntidoteImg = <img className='img-pozione' src={AntidoteImg} alt='' />
    } else updatedAntidoteImg = <img className='img-pozione' src={AntidoteImgG} alt='' />


    // Tricolore barra degli hp
    let hpBarColor
    if (inventory.currentHp >= 50) {
        hpBarColor = 'green'
    }
    else if (inventory.currentHp > 25 && inventory.currentHp <= 50) {
        hpBarColor = 'yellow'
    }
    else if (inventory.currentHp < 25) {
        hpBarColor = 'red'
    }

    //Drink Potion

    function handleDrinkPotion(i) {
        if ((i.potions !== 0) && (i.currentHp !== 100)) {

            i.potions--

            let maxval = 100;
            let constant = 10;
            i.currentHp = Math.min(i.currentHp + constant, maxval);


            callBack(JSON.stringify(i))


        } else { callBack(JSON.stringify(i)) }
    }

    //Drink Antidote

    function handleDrinkAntidote(i) {
        if ((i.antidote !== 0) && i.status) {

            i.antidote--
            i.status.poisoned = false

            callBack(JSON.stringify(i))
        } else { callBack(JSON.stringify(i)) }
    }



    return (

        <div className=""  >
            <img className="card-img-top img-properties hero-card-background" src={heroCard.frontImg} alt='' />
            <div className="card-body hero-card-background text-white p-3">

                <h5 className="card-title">{heroCard.name}</h5>

                <div className='d-flex'>
                    <p className="card-text me-1">{inventory.currentHp * heroCard.hpMultiplayer}/{heroCard.maxHp} HP:</p>

                    {/* // HP BAR */}
                    <div className="hp-bar-container">
                        <div className="hp-bar" style={{ width: `${inventory.currentHp}%`, height: '100%', backgroundColor: `${hpBarColor}`, border: `1px solid black` }}>
                            <div className="text-white"></div>
                        </div>
                    </div>

                </div>
                {Object.values(inventory.status).filter(e => e).length > 0 &&
                    <div className='d-flex'>
                        <p className="card-text">STATUS:</p><div className='ms-2 status-box'>

                            <span>{inventory.status.poisoned && Object.keys(inventory.status)[0].toUpperCase()}</span>

                        </div>
                    </div>
                }
                <p className="card-text">ATTACK: {heroCard.attack}</p>
                <p className="card-text">DEFENCE: {heroCard.defence}</p>
                <div className='d-flex'>
                    <div className='d-flex flex-column me-4'>
                        <div className='d-flex'>
                            {updatedPotionImg}
                            <p className='ms-3'>POTIONS: {inventory.potions}</p>
                        </div>
                        <button type="button" className='potion-button' onClick={() => handleDrinkPotion(inventory)} >DRINK POTION</button>
                    </div>
                    <div className='d-flex flex-column'>
                        <div className='d-flex'>
                            {updatedAntidoteImg}
                            <p className='ms-3'>ANTIDOTES: {inventory.antidote}</p>
                        </div>
                        <button href="#" type="button" className='antidote-button' onClick={() => handleDrinkAntidote(inventory)} >DRINK ANTIDOTE</button>

                    </div>
                </div>
            </div>
        </div>
    );




};