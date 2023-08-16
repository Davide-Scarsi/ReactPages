import React from 'react'
import Navbar from '../components/navbar/navbar';
import MonsterCard from '../components/monster/monster-card';
import BoarImg from '../images/boar.png'
import { useState, useEffect } from 'react';
import HeroCardBehind from '../components/hero/hero-card-behind'
// IMPORTO LISTA MOSTRI
import {monstersList} from '../components/monster/monsters-list'

//NavActive
const active = {
    heroColor : {color: "black"},
    marketColor: {color: "black"},
    fightColor: {color: "var(--activeColor)"}

}



export default function Fight() {

    const [inventory, setInventory] = useState();
    
    const [mobStats, setMobStats] = useState({mobCurrentHp: 100});
  

  // Questa funzione parte la prima volta che viene caricata la pagina e va a caricare INVENTARIO dal local storage
  useEffect(  () => {
    const data = window.localStorage.getItem('INVENTARIO')
    if (data !== null) {  setInventory(JSON.parse(data)) };
    const data2 = window.localStorage.getItem('MOBSTATS')
    if (data2 !== null) {  setMobStats(JSON.parse(data2)) }
  }, [])

  // Questa funzione è alle dipendenze di "inventory" e parte ogni volta che inventory cambia
  useEffect(() => {
    window.localStorage.setItem('INVENTARIO', JSON.stringify(inventory))
  }, [inventory])

  useEffect(() => {
    window.localStorage.setItem('MOBSTATS', JSON.stringify(mobStats))
  }, [mobStats])



    return (
        <>
            <Navbar active={active}/>
            <div className='container'>
                <div className='row all-centered'>
                    <div className='col-6 all-centered'>
                        <div>
                        <HeroCardBehind inventory = {inventory}/>
                        <button>ATTACK</button>
                        </div>
                        <MonsterCard monsterCard = {monstersList.boar} mobStats = {mobStats}/>
                    </div>
                </div>
            </div>
        </>

    )

};

