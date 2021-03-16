import React, { Component } from 'react';

import Persons from './containers/Persons';
import Count from './containers/Count'
import Posts from './containers/Posts';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Count /> */}
        <Posts />
        <Persons />
      </div>
    );
  }
}

export default App;
