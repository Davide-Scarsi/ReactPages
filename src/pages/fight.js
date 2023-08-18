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

let buttonStyleStatus


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




const defaultMobStats = { mobCurrentHp: 100 }
const defaultInventory = { gold: 10, potions: 3, currentHp: 100, }


export default function Fight() {




  function startFight() {

    setMobStats({ mobCurrentHp: 100 })

    let randomNumber = Math.floor(Math.random() * (Object.keys(monstersList).length))


    setfightStatus({ display: `none` })
    setSelector(monstersList[randomNumber])

  }




  // LOCAL STORAGE
  const [mobStats, setMobStats] = useState(defaultMobStats);
  const [inventory, setInventory] = useState(defaultInventory);
  const [fightStatus, setfightStatus] = useState({ display: `` });
  const [selector, setSelector] = useState(monstersList[0]);
  const [notification, setNotification] = useState("...");
  const [greyAButton, setgreyAButton] = useState();



  // Questa funzione parte la prima volta che viene caricata la pagina e va a caricare INVENTARIO dal local storage
  useEffect(() => {
    const data = window.localStorage.getItem('INVENTARIO')
    if (data !== null) { setInventory(JSON.parse(data)) };
    const data2 = window.localStorage.getItem('MOBSTATS')
    if (data2 !== null) { setMobStats(JSON.parse(data2)) }
    const data3 = window.localStorage.getItem('FIGHTSTATUS')
    if (data3 !== null) { setfightStatus(JSON.parse(data3)) }
    const data4 = window.localStorage.getItem('SELECTOR')
    if (data4 !== null) { setSelector(JSON.parse(data4)) }
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
    window.localStorage.setItem('SELECTOR', JSON.stringify(selector))
  }, [selector])

  useEffect(() => {
    setNotification(notification)
  }, [notification])

  useEffect(() => {
    setgreyAButton(greyAButton)
  }, [greyAButton])


  // GET ELEMENT BY ID
  const lock = document.getElementById(`lock`)
  const deathScreen = document.getElementById(`deathScreen`)



  // Funzione che gestisce il combattimento ----------------------------------------------------------------------------------------------
  function fightSequence() {


    // Fa apparire uno schermo invisibie che ricopre la pagina
    lock.style.display = ``
    setgreyAButton({border: '1px solid grey', color: 'grey' })

    let mobStatsUpdater
    let inventoryUpdater


    mobStats.mobCurrentHp = Math.round(Math.max(mobStats.mobCurrentHp - (heroesList[0].attack / selector.hpMultiplayer), 0))

    setNotification("SUCCESSFUL HIT!!")

    mobStatsUpdater = { ...mobStats }
    setMobStats(mobStatsUpdater)



    setTimeout(() => {


      if (mobStats.mobCurrentHp !== 0) {

        if (Math.round(Math.random() * (100)) > selector.hitChance) { setNotification("Mob attack MISSED!!") } else {


          inventory.currentHp = Math.max(inventory.currentHp - ((selector.attack - heroesList[0].defence) / heroesList[0].hpMultiplayer), 0)

          inventoryUpdater = { ...inventory }
          setInventory(inventoryUpdater)

          setNotification("Mob attacked YOU!!")
          mobStatsUpdater = { ...mobStats }
          setMobStats(mobStatsUpdater)
        }


      } else {

        inventory.gold += 5

        inventoryUpdater = { ...inventory }
        setInventory(inventoryUpdater)

        setNotification("Mob DEFETED!! + 5 gold")

        mobStatsUpdater = { ...mobStats }
        setMobStats(mobStatsUpdater)
      }



      setTimeout(() => {
        setNotification("...")

        mobStatsUpdater = { ...mobStats }
        setMobStats(mobStatsUpdater)

        // Fa scomparire lo schermo invisibie che ricopre la pagina





        if (inventory.currentHp === 0) {

          setMobStats(defaultMobStats)
          setInventory(defaultInventory)



          deathScreen.style.display = ``
          lock.style.display = ``
          setgreyAButton({})
        }

        setTimeout(() => {

          if (mobStats.mobCurrentHp === 0) {
            setTimeout(() => {
              startFight()
              lock.style.display = `none`
              setgreyAButton({})
            }, 1000);
          } else {
            setTimeout(() => {
              lock.style.display = `none`
              setgreyAButton({})
            }, 1000);
          }


        }, 1500);

      }, 1500);

    }, 1500);

  }




  // Cambia immagine da Mob vivo a morto
  let imgSwitch
  if (mobStats.mobCurrentHp === 0) {
    imgSwitch = ripImg
  } else { imgSwitch = selector.mobImg }


  // funzione di reset
  function resetMobStats() {
    let Update = { ...defaultMobStats }
    setMobStats(Update)
  }

  function removeDeathScrean() {
    deathScreen.style.display = `none`
    lock.style.display = `none`
    buttonStyleStatus = ''
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
              <h1>YOU DIED</h1>
              <Link className="nav-link" onClick={() => removeDeathScrean()} to="/">RETRY</Link>
            </div>


            <div className='col-6 all-centered hero-container'>
              <div>
                <HeroCardBehind inventory={inventory} />
                {/* <button onClick={() => resetMobStats()}> RESET</button> */}
              </div>
            </div>
            <div className='col-4 all-centered hero-container'>

              <monsterFromListContext.Provider value={selector}>
                <mobStatsContext.Provider value={mobStats}>
                  <mobImgContext.Provider value={imgSwitch}>
                    <MonsterCard />
                  </mobImgContext.Provider></mobStatsContext.Provider></monsterFromListContext.Provider>
            </div>
            {/* <button onClick={() => startFight()}>FIGHT</button> */}
            <div className='fightSequence-button-container'>
              <button style={greyAButton} className='fightSequence-button btn btn-outline-danger' onClick={() => fightSequence()}> ATTACK</button>
            </div>
            <div className='notifications-container '><p >{notification}</p></div>
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
