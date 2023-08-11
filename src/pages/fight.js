import React from 'react'
import Navbar from '../components/navbar/navbar';
import MonsterCard from '../components/monster-card/monster-card';
import BoarImg from '../images/boar.png'
import { useState, useEffect } from 'react';
import HeroCardBehind from '../components/hero/hero-card-behind'

//NavActive
const active = {
    heroColor : {color: "black"},
    marketColor: {color: "black"},
    fightColor: {color: "var(--activeColor)"}

}


//Boar
const boar = {
    name: "Boar",
    maxHp: 200,
    hpMultiplayer: 2,
    currentHp: 100,
    img: BoarImg,
    attack: 30,
    defence: 0
}

export default function Fight() {

    const [inventory, setInventory] = useState();
  

  // Questa funzione parte la prima volta che viene caricata la pagina e va a caricare INVENTARIO dal local storage
  useEffect(  () => {
    const data = window.localStorage.getItem('INVENTARIO')
    if (data !== null) {  setInventory(JSON.parse(data)) }
  }, [])

  // Questa funzione è alle dipendenze di "inventory" e parte ogni volta che inventory cambia
  useEffect(() => {
    window.localStorage.setItem('INVENTARIO', JSON.stringify(inventory))
  }, [inventory])
 

    return (
        <>
            <Navbar active={active}/>
            <div className='container'>
                <div className='row all-centered'>
                <div className='col-4 all-centered'>
                        <HeroCardBehind inventory = {inventory}/>
                    </div>
                    <div className='col-4 all-centered'>
                        <MonsterCard monsterCard = {boar}/>
                    </div>
                </div>
            </div>
        </>

    )

};

