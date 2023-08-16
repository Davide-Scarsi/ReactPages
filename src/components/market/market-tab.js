import '../../index.css'
import "./market-tab.css"
import React, { Component } from 'react';
import ItemBox from '../item-box/item.box';
import Coin from '../../images/coin.png'



export default class MarketTab extends Component {
    
    constructor(props) {
        super(props);
        
        this.state = { 
            inventory: window.localStorage.getItem('INVENTARIO'),
        }

    }

    
    set = i =>{

        if (i.gold !== 0){

            i.gold = Math.max(i.gold - 2, 0);
            i.potions += 1
            window.localStorage.setItem('INVENTARIO', JSON.stringify(i))
            this.setState({"inventory": JSON.stringify(i)});
        }
        
    }
    
    render() {
        

        
        
        return ( 

     
            <div className='container '>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th scope="col">#OWNED</th>
                            <th scope="col">ITEM</th>
                            <th scope="col">PRICE</th>
                            <th scope="col"> <img className='coin' src={Coin}/> <span>GOLD: {JSON.parse(this.state.inventory).gold} </span> </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row"> 
                                <div className='d-flex'>
                                <ItemBox/> <span>N° {JSON.parse(this.state.inventory).potions} </span>
                                </div>
                             </th>
                            <td > <span className='fw-bold text-secondary'>HP POTION </span><br/> Heal your hp by 10%</td>
                            <td>2</td>
                            <td><button onClick={()=>this.set(JSON.parse(this.state.inventory))}>BUY</button></td>
                        </tr>
                       
                       
                    </tbody>
                </table>
            </div>


        );




    }
};
