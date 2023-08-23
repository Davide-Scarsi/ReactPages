import React from 'react'
import './item-box.css'


export default function ItemBox ({item}){
    return(
        
    <div className='item-box all-centered'>
        <img className='img-inside' src={item} ></img>
    </div>
    )
}