import React, { Component } from 'react';
import Navbar from './Component/Navbar';
import News from './Component/News';

export default class App extends Component {
  a = "prabhu"
  render() {
    return (
      <>
            <Navbar/>
            <News pageSize={5} coutry="in" category="sports" /> 
          
      
      </>

    )
  }
}