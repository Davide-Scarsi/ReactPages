import '../../index.css'
import "./hero-card.css"
import React, { Component } from 'react';
import PotionImg from '../../images/potion.png';
import PotionImgG from '../../images/potionG.png';



export default class HeroCard extends Component {

    constructor(props) {
        super(props);

      }

      
      render() {

        let updatedPotionImg = <></>
        if(this.props.inventory.potions!==0){
            updatedPotionImg = <img className='img-pozione' src={PotionImg}/>
        } else updatedPotionImg = <img className='img-pozione' src={PotionImgG}/>


        // Tricolore barra degli hp
        let hpBarColor
        if(this.props.inventory.currentHp>=50){
            hpBarColor = 'green'} 
        else if (this.props.inventory.currentHp>25 && this.props.inventory.currentHp <= 50  ){
            hpBarColor = 'yellow'}
        else if(this.props.inventory.currentHp<25){
            hpBarColor = 'red'
        }

        return (

            <div className="card"  >
                <img className="card-img-top img-properties" src={this.props.Later.frontImg} alt="Card image cap" />
                <div className="card-body">

                    <h5 className="card-title">{this.props.Later.name}</h5>

                    <div className='d-flex'>
                        <p className="card-text me-1">{this.props.inventory.currentHp*this.props.Later.hpMultiplayer}/{this.props.Later.maxHp} HP:</p>

                        {/* // HP BAR */}
                        <div className="hp-bar-container">
                            <div className="hp-bar" style={{ width: `${this.props.inventory.currentHp}%`, height: '100%', backgroundColor : `${hpBarColor}` , border: `1px solid black`}}>
                                <div className="text-white"></div>
                            </div>
                        </div>

                    </div>
                    <p className="card-text">ATTACCO: {this.props.Later.attack}</p>
                    <p className="card-text">DIFESA: {this.props.Later.defence}</p>
                    <div className='d-flex'>
                    <p>POZIONI: {this.props.inventory.potions}</p>              
                    {updatedPotionImg}
                    

                    </div>
                </div>
            </div>
        );

         

    }
};