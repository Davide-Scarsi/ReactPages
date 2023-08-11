import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/navbar';
import HeroCard from './components/hero/hero-card';
import { useState, useEffect } from 'react';
// IMPORTO LIST EROI
import {heroesList} from './components/hero/heroes-list'


//NavActive
const active = {
  heroColor : {color: "var(--activeColor)"},
  marketColor: {color: "black"},
  fightColor: {color: "black"}

}



function App() {

  const defaultInventory = { gold: 10, potions: 3, currentHp: 50, }

  const [inventory, setInventory] = useState(defaultInventory);
  

  // Questa funzione parte la prima volta che viene caricata la pagina e va a caricare INVENTARIO dal local storage
  useEffect( () => {
    const data = window.localStorage.getItem('INVENTARIO')
    if (data !== null) { setInventory(JSON.parse(data)) }
  }, [])

  // Questa funzione è alle dipendenze di "inventory" e parte ogni volta che inventory cambia
  useEffect(() => {
    window.localStorage.setItem('INVENTARIO', JSON.stringify(inventory))
  }, [inventory])


  function DrinkPotion(i) {
    if ((i.potions !== 0)&&(i.currentHp!==100)) {

      i.potions--

      let maxval = 100;
      let constant = 10;
      i.currentHp = Math.min(i.currentHp + constant, maxval);
      return JSON.stringify(i)
    } else {return JSON.stringify(i)}
  }
  
  function addPotion(i){
     i.potions++
     return JSON.stringify(i)
  }

  function resetInventory(i){
    return JSON.stringify(i)
 }

  

  return (
    <>
      <Navbar active={active}/>

      <div className="container-fluid">
        <div className='row d-flex justify-content-center'>
     
          <div className='col-3'>
            <HeroCard inventory={inventory} Later = {heroesList.Later}/>
            <button type="button" onClick={()=>setInventory(JSON.parse(DrinkPotion(inventory)))} >BEVI POZIONE</button>
            <button type="button" onClick={()=>setInventory(JSON.parse(addPotion(inventory)))} >AGGIUNGI</button>
            <button type="button" onClick={()=>setInventory(JSON.parse(resetInventory(defaultInventory)))} >RESET</button>
           
          </div>
      
        </div>

      </div>




    </>
  );


}



export default App;


// USARE LOCAL O SESSION STORAGE

// CTRL + SHIF + R PER SVUOTARE LA CACHE

// npm run deploy

