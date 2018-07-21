import React, { Component } from 'react';

class NameComponent extends Component {
  //method part of Component Class
  componentDidMount() {
    console.log('mounted Name')
  }
  //method part of Component Class
  render() {

    var word = 'hello';
    var style = {fontSize: '100px'};

    return (
      <div>
       <p>Kasey</p>
      </div>
    );
  }
}

export default NameComponent;