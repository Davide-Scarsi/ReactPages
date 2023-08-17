import '../../index.css'
import "./market-tab.css"
import React from 'react';
import ItemBox from '../item-box/item.box';
import Coin from '../../images/coin.png'
import { useState, useEffect } from 'react';




export default function MarketTab() {

    // constructor(props) {
    //     super(props);

    //     this.state = { 
    //         inventory: window.localStorage.getItem('INVENTARIO'),
    //     }

    // }


    // set = i =>{

    //     if (i.gold !== 0){

    //         i.gold = Math.max(i.gold - 2, 0);
    //         i.potions += 1
    //         window.localStorage.setItem('INVENTARIO', JSON.stringify(i))
    //         this.setState({"inventory": JSON.stringify(i)});
    //     }

    // }

    // render() {

    const [inventory, setInventory] = useState({ gold: 10, potions: 3, currentHp: 50 });

    // Questa funzione parte la prima volta che viene caricata la pagina e va a caricare INVENTARIO dal local storage
    useEffect(() => {
        const data = window.localStorage.getItem('INVENTARIO')
        if (data !== null) { setInventory(JSON.parse(data)) };
    }, [])



    // Questa funzione è alle dipendenze di "inventory" e parte ogni volta che inventory cambia
    useEffect(() => {
        window.localStorage.setItem('INVENTARIO', JSON.stringify(inventory))
    }, [inventory])


    function buyPotions() {
       
        if (inventory.gold !== 0) {

            inventory.gold = Math.max(inventory.gold - 5, 0);
            inventory.potions += 1
            const inventoryUpdater = {...inventory}
            setInventory(inventoryUpdater)
        }
    }

    return (


        <div className='container '>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th scope="col">#OWNED</th>
                        <th scope="col">ITEM</th>
                        <th scope="col">PRICE</th>
                        <th scope="col"> <img className='coin' src={Coin} alt=''/> <span>GOLD: {inventory.gold} </span> </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">
                            <div className='d-flex'>
                                <ItemBox /> <span>N° {inventory.potions} </span>
                            </div>
                        </th>
                        <td > <span className='fw-bold text-secondary'>HP POTION </span><br /> Heal your hp by 10%</td>
                        <td>5 <img className='coin' src={Coin} alt=''/></td>
                        <td><button onClick={() => buyPotions()}>BUY</button></td>
                    </tr>


                </tbody>
            </table>
        </div>


    );




    // }
};
