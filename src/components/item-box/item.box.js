import React from 'react'
import './item-box.css'
import Potion from '../../images/potion.png'


export default function ItemBox (){
    return(
        
    <div className='item-box all-centered'>
        <img className='img-inside' src={Potion} ></img>
    </div>
    )
}