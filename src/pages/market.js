import './market.css'
import React from 'react'
import Navbar from '../components/navbar/navbar';
import MarketTab from '../components/market/market-tab';



//NavActive
const active = {
    heroColor: { color: "black" },
    marketColor: { color: "var(--activeColor)" },
    fightColor: { color: "black" }

}



export default function Market() {



    return (
        <>
            <body className='bg-secondary vh-100'>
                <div className=' Market-background'>
                    <Navbar active={active} />
                    <div className='pt-5'>
                        <MarketTab />
                    </div>

                </div>
            </body>
        </>

    )

};
