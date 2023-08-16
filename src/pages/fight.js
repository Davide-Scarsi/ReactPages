import './fight.css'
import React from 'react'
import Navbar from '../components/navbar/navbar';
import MonsterCard from '../components/monster/monster-card';
import { useState, useEffect } from 'react';
import HeroCardBehind from '../components/hero/hero-card-behind';
// IMPORTO LISTA MOSTRI
import { monstersList } from '../components/monster/monsters-list'
// IMPORTO LISTA EROI
import { heroesList } from '../components/hero/heroes-list';
import ripImg from '../images/rip.png';

//NavActive
const active = {
  heroColor: { color: "black" },
  marketColor: { color: "black" },
  fightColor: { color: "var(--activeColor)" }

}



const defaultMobStats = { mobCurrentHp: 100, p: "" }


export default function Fight() {

  const [inventory, setInventory] = useState({ gold: 10, potions: 3, currentHp: 50, });

  const [mobStats, setMobStats] = useState(defaultMobStats);


  // Questa funzione parte la prima volta che viene caricata la pagina e va a caricare INVENTARIO dal local storage
  useEffect(() => {
    const data = window.localStorage.getItem('INVENTARIO')
    if (data !== null) { setInventory(JSON.parse(data)) };
    const data2 = window.localStorage.getItem('MOBSTATS')
    if (data2 !== null) { setMobStats(JSON.parse(data2)) }
  }, [])

  // Questa funzione è alle dipendenze di "inventory" e parte ogni volta che inventory cambia
  useEffect(() => {
    window.localStorage.setItem('INVENTARIO', JSON.stringify(inventory))
  }, [inventory])

  useEffect(() => {
    window.localStorage.setItem('MOBSTATS', JSON.stringify(mobStats))
  }, [mobStats])

  let p
  const lock = document.getElementById(`lock`)





  // Funzione che gestisce il combattimento
  function fight() {

    // Fa apparire uno schermo invisibie che ricopre la pagina
    lock.style.display = `block`

    let mobStatsUpdater
    let inventoryUpdater

    mobStats.mobCurrentHp = Math.max(mobStats.mobCurrentHp - (heroesList.Later.attack / monstersList.boar.hpMultiplayer), 0)
    mobStats.p = "Hai attaccato con successo!!"

    mobStatsUpdater = { ...mobStats }
    setMobStats(mobStatsUpdater)



    setTimeout(() => {


      if(mobStats.mobCurrentHp !== 0){
      inventory.currentHp = Math.max(inventory.currentHp - (monstersList.boar.attack / heroesList.Later.hpMultiplayer), 0)

      inventoryUpdater = { ...inventory }
      setInventory(inventoryUpdater)

      mobStats.p = "Hai subito un attacco!!"
      mobStatsUpdater = { ...mobStats }
      setMobStats(mobStatsUpdater)}else{

       
      mobStats.p = "Nemico sconfitto!!"
      mobStatsUpdater = { ...mobStats }
      setMobStats(mobStatsUpdater)
      }



      setTimeout(() => {
        mobStats.p = ""
        mobStatsUpdater = { ...mobStats }
        setMobStats(mobStatsUpdater)

        // Fa scomparire lo schermo invisibie che ricopre la pagina
        lock.style.display = `none`
      }, 2000);

    }, 2000);

  }

  let imgSwitch
if(mobStats.mobCurrentHp === 0){
  imgSwitch = ripImg
} else {imgSwitch = monstersList.boar.mobImg}


  // funzione di reset
  function resetMobStats() {
    let Update = { ...defaultMobStats }
    setMobStats(Update)
  }

  return (
    <>
      <div id="lock" style={{ display: `none`, position: `absolute`, top: `0`, zIndex: `10`, height: `100vh`, width: `100vw` }}>lock</div>

      <div className='bg-secondary Fight-background'>
        <Navbar active={active} />
        <div className='container pt-5' >
          <div className='row all-centered bg-dark rounded text-white '>
            <div className='col-6 all-centered'>
              <div>
                <HeroCardBehind inventory={inventory} />
                <button onClick={() => fight()}> ATTACK</button>
                <button onClick={() => resetMobStats()}> RESET</button>
              </div>
              <MonsterCard monsterCard={monstersList.boar} mobStats={mobStats} monsterImg={imgSwitch}/>
            </div>
          </div>
          <div className='row text-white'>
            <div className='col-12 all-centered'>
              <p className='h3'>{mobStats.p}</p>
            </div>
          </div>
        </div>
      </div>
    </>

  )

};

