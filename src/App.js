// import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/navbar';
import HeroCard from './components/hero/hero-card';
import React, { Component } from 'react';


class App extends Component {


  constructor(props) {
    super(props);
    this.state = {
      inventory: {
        gold: 0,
        potions: 0,
        currentHp: 80,}
      
    };
  }

  render() {

    return (
      <>
        <Navbar />

        <div className="container-fluid">
          <div className='row d-flex justify-content-center'>
            <div className='col-3'>
              <HeroCard hp={this.state.inventory.currentHp} />
            </div>
          </div>

        </div>




      </>
    );
  }
}



export default App;


// USARE LOCAL O SESSION STORAGE
