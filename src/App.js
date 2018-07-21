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
    
    var array = ['welcome', 'to', 'my', 'beginner', 'react', 'project'];

    var arrayToRender = [];
    array.forEach(function(word){
      arrayToRender.push(
        <p>{word}</p>)
    })

    //variables get added w/ {}
    //components get added with <>

    return (
      <div>
        <p className = "large" style={{fontSize: "200px"}}>meow</p>
        <p style ={style}>{word}</p>        
        {arrayToRender}
        <NameComponent/>
        <button onClick={ this.consoleLog }>
            <NameComponent/>
        </button>
      </div>
    );
  }
}

export default App;
