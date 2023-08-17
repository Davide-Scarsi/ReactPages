import './fight.css'
import '../index.css'
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
import { createContext } from 'react';
import { Link } from "react-router-dom";






//NavActive
const active = {
  heroColor: { color: "black" },
  marketColor: { color: "black" },
  fightColor: { color: "var(--activeColor)" }

}

// EXPORT PROPS
export const monsterFromListContext = createContext(null);
export const mobStatsContext = createContext(null);
export const mobImgContext = createContext(null);




const defaultMobStats = { mobCurrentHp: 100, p: "", p2:"" }
const defaultInventory = { gold: 10, potions: 3, currentHp: 100, }


export default function Fight() {
  
 
  
  
  function startFight() {

    setMobStats({ mobCurrentHp: 100, p: "", p2:"" })
    
    let random = Math.floor(Math.random() * (Object.keys(monstersList).length - 1 + 1) + 1)
    console.log(random);
    let randomMob = monstersList.filter(e => e.id == random)
    
    console.log(Object (...randomMob));
    setfightStatus({display : `none`})

    setselector(randomMob)
  }
  
  
  
  
  // LOCAL STORAGE
  const [mobStats, setMobStats] = useState(defaultMobStats);
  const [inventory, setInventory] = useState(defaultInventory);
  const [fightStatus, setfightStatus] = useState({display : ``});
  const [selector, setselector] = useState(monstersList);

  
  let currentMob = selector[0]

  
  // Questa funzione parte la prima volta che viene caricata la pagina e va a caricare INVENTARIO dal local storage
  useEffect(() => {
    const data = window.localStorage.getItem('INVENTARIO')
    if (data !== null) { setInventory(JSON.parse(data)) };
    const data2 = window.localStorage.getItem('MOBSTATS')
    if (data2 !== null) { setMobStats(JSON.parse(data2)) }
    const data3 = window.localStorage.getItem('FIGHTSTATUS')
    if (data3 !== null) { setfightStatus(JSON.parse(data3)) }
  }, [])

  // Questa funzione è alle dipendenze di "inventory" e parte ogni volta che inventory cambia
  useEffect(() => {
    window.localStorage.setItem('INVENTARIO', JSON.stringify(inventory))
  }, [inventory])

  useEffect(() => {
    window.localStorage.setItem('MOBSTATS', JSON.stringify(mobStats))
  }, [mobStats])

  useEffect(() => {
    window.localStorage.setItem('FIGHTSTATUS', JSON.stringify(fightStatus))
  }, [fightStatus])

  useEffect(() => {
    currentMob = selector[0]
  }, [selector])


  // GET ELEMENT BY ID
  const lock = document.getElementById(`lock`)
  const deathScreen = document.getElementById(`deathScreen`)


  // Funzione che gestisce il combattimento
  function fight() {


    // Fa apparire uno schermo invisibie che ricopre la pagina
    lock.style.display = ``

    let mobStatsUpdater
    let inventoryUpdater
    

    console.log(currentMob);

    mobStats.mobCurrentHp = Math.max(mobStats.mobCurrentHp - (heroesList.Later.attack / currentMob.hpMultiplayer), 0)
    
    mobStats.p = "Hai attaccato con successo!!"

    mobStatsUpdater = { ...mobStats }
    setMobStats(mobStatsUpdater)



    setTimeout(() => {


      if (mobStats.mobCurrentHp !== 0) {
        inventory.currentHp = Math.max(inventory.currentHp - (currentMob.attack / heroesList.Later.hpMultiplayer), 0)

        inventoryUpdater = { ...inventory }
        setInventory(inventoryUpdater)

        mobStats.p = "Hai subito un attacco!!"
        mobStatsUpdater = { ...mobStats }
        setMobStats(mobStatsUpdater)
      } else {

        inventory.gold += 5

        inventoryUpdater = { ...inventory }
        setInventory(inventoryUpdater)

        mobStats.p = "Nemico sconfitto!!"
        mobStats.p2 = "+5 GOLD"

        mobStatsUpdater = { ...mobStats }
        setMobStats(mobStatsUpdater)
      }



      setTimeout(() => {
        mobStats.p = ""
        mobStats.p2 = ""
        mobStatsUpdater = { ...mobStats }
        setMobStats(mobStatsUpdater)

        // Fa scomparire lo schermo invisibie che ricopre la pagina
        lock.style.display = `none`

        


        if (inventory.currentHp === 0) {

          setMobStats(defaultMobStats)
          setInventory(defaultInventory)



          deathScreen.style.display = ``
          lock.style.display = ``
        }

      }, 2000);

    }, 2000);

  }




  // Cambia immagine da Mob vivo a morto
  let imgSwitch
  if (mobStats.mobCurrentHp === 0) {
    imgSwitch = ripImg
  } else { imgSwitch = currentMob.mobImg }


  // funzione di reset
  function resetMobStats() {
    let Update = { ...defaultMobStats }
    setMobStats(Update)
  }

  function removeDeathScrean() {
    deathScreen.style.display = `none`
    lock.style.display = `none`
  }

  

  return (
    <>
      <div id="lock" style={{ display: `none`, position: `absolute`, top: `0`, zIndex: `10`, height: `100vh`, width: `100vw` }}>lock</div>

      <div className='bg-secondary Fight-background '>
        <Navbar active={active} />
        <div className='container pt-5' >

          <div className='row all-centered bg-dark rounded text-white position-relative hero-container'>

            <div id="fightScreen" className='fight-screen all-centered ' style={{ display: `${fightStatus.display}` }}>
              <h1>READY?</h1>
              <button onClick={() => startFight()}>FIGHT</button>
            </div>

            <div id="deathScreen" className='death-screen all-centered ' style={{ display: `none` }}>
              <h1>SEI MORTO</h1>
              <Link className="nav-link" onClick={() => removeDeathScrean()} to="/">RIPROVA</Link>
            </div>


            <div className='col-6 all-centered hero-container'>
              <div>
                <HeroCardBehind inventory={inventory} />
                <button onClick={() => fight()}> ATTACK</button>
                <button onClick={() => resetMobStats()}> RESET</button>
              </div>
            </div>
            <div className='col-4 all-centered hero-container'>
              
              <monsterFromListContext.Provider value={currentMob}>
                <mobStatsContext.Provider value={mobStats}>
                  <mobImgContext.Provider value={imgSwitch}>
                    <MonsterCard />
                  </mobImgContext.Provider></mobStatsContext.Provider></monsterFromListContext.Provider>
            </div>
            <button onClick={() => startFight()}>FIGHT</button>
          </div>

          <div className='row text-white'>
            <div className='col-12 all-centered flex-column'>
              <p className='h3'>{mobStats.p}</p>
              <p className='h3'>{mobStats.p2}</p>
            </div>
          </div>
        </div>
      </div>
      
    </>

  )

};
