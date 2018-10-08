/**
* App.js
*/

import React, { Component } from 'react';
import './App.css';
import Map from './Components/map'
import Title from './Components/title'
import SearchBar from './Components/search-bar'

class App extends Component {
  render() {
    return (
      <div className="App">
      <Title/>
      <Map
      className = "map"/>
      <SearchBar
      className = "options-box"/>
      </div>
    );
  }
}

export default App;
