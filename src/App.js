import React, { Component } from 'react';
import NameComponent from './Components/NameComponent'

class App extends Component {
  //method part of Component Class
  componentDidMount() {
    console.log('mounted')
  }
  //Removing this method to keep app compact and just write method in component.
  //This is a simple method and can be directly made in component
  /*consoleLog() {
    console.log('I\'m pressed!');
  }*/

  //method part of Component Class
  render() {

    var word = 'hello';
    var style = {fontSize: '100px'};
    
    const array = ['welcome', 'to', 'my', 'beginner', 'react', 'project'];
    array.push('from', 'Udemy');

    //For Loops: Key Props are required, it will render, but throw error in console
    //Unique Keys are required for handling & storing w/ React
    //in this situation, each word will be different, so we can use {word}
    // const arrayToRender = [];
    // array.forEach(function(word){
    //   arrayToRender.push(
    //     <p key={word}>{word}</p>)
    // })

    //variables get added w/ {}
    //components get added with <>

    return (
      <div>
        <p className = "large" style={{fontSize: "200px"}}>meow</p>
        { /*This was where we called in original forEach loop, but was replaced w/ map */
        /*<p style ={style}>{word}</p> */}    
       
        {array.map(word => {
           if (word !== 'from' && word !== 'Udemy') {
            return (
               <p key={word}>{word}</p>
              )
          }
        })}
      
        <NameComponent/>
       {//Removing this called in component and writing directly into onClick
       /* <button onClick={ this.consoleLog }>*/}
          <button onClick = {() => { console.log('I am clicked!') }}>
            <NameComponent/>
        </button>
      </div>
    );
  }
}

export default App;
