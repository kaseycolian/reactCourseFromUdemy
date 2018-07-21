import React, { Component } from 'react';
import NameComponent from './Components/NameComponent'

class App extends Component {
  //method part of Component Class
  componentDidMount() {
    console.log('mounted')
  }

  consoleLog() {
    console.log('I\'m pressed!');
  }
  //method part of Component Class
  render() {

    var word = 'hello';
    var style = {fontSize: '100px'};
    var style2 = {backgroundColor: 'magenta'};

    return (
      <div>
        <p className = "large" style={{fontSize: "200px"}}>meow</p>
        <p style ={style}>{word}</p>
        <NameComponent/>
        <button onClick={ this.consoleLog }>
            <NameComponent/>
        </button>
      </div>
    );
  }
}

export default App;
