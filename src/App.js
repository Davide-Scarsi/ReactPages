// import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/navbar';
import HeroCard from './components/hero/hero-card';
import React from 'react';
import { useState, useEffect } from 'react';


function App() {

  function DrinkPotion() {
    if (inventory.potions !== 0) {

      inventory.potions--

      let maxval = 100;
      let constant = 5;
      inventory.currentHp = Math.min(inventory.currentHp + constant, maxval);
    }
  }

  const [inventory, setInventory] = useState({ gold: 0, potions: 3, currentHp: 80, });

  // Questa funzione parte la prima volta che viene caricata la pagina e va a caricare INVENTARIO dal local storage
  useEffect(() => {
    const data = window.localStorage.getItem('INVENTARIO')
    if (data !== null) { setInventory(JSON.parse(data)) }
  }, [])

  // Questa funzione è alle dipendenze di "inventory" e parte ogni volta che inventory cambia
  useEffect(() => {
    window.localStorage.setItem('INVENTARIO', JSON.stringify(inventory))
  }, [inventory])



  return (
    <>
      <Navbar />

      <div className="container-fluid">
        <div className='row d-flex justify-content-center'>
          <div className='col-3'>
            <HeroCard inventory={inventory} />
            <button type="button" onClick={DrinkPotion()} >Bevi pozione</button>
           
          </div>
        </div>

      </div>




    </>
  );

}



export default App;


// USARE LOCAL O SESSION STORAGE

// CTRL + SHIF + R PER SVUOTARE LA CACHE
