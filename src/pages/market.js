import React from 'react'
import Navbar from '../components/navbar/navbar';
import MarketTab from '../components/market/market-tab';




//NavActive
const active = {
    heroColor : {color: "black"},
    marketColor: {color: "var(--activeColor)"},
    fightColor: {color: "black"}

}

export default function Market() {

    
    return (
        <>
            <Navbar active={active}/>
            <MarketTab/>
            
            
        </>

    )

};

