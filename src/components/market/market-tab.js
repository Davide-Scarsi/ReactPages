import '../../index.css'
import "./market-tab.css"
import React, { Component } from 'react';



export default class MarketTab extends Component {
    state = {
        inventory: window.localStorage.getItem('INVENTARIO'),
        damn: 0
    }

    constructor(props) {
        super(props);


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

     
            <div className='container'>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">ITEM</th>
                            <th scope="col">PRICE</th>
                            <th scope="col">GOLD BALANCE: {JSON.parse(this.state.inventory).gold}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>POTION</td>
                            <td>2</td>
                            <td><button onClick={()=>this.set(JSON.parse(this.state.inventory))}>COMPRA</button></td>
                        </tr>
                       
                       
                    </tbody>
                </table>
            </div>


        );




    }
};
