import React, { Component } from 'react';
import NameComponent from './Components/NameComponent'

class App extends Component {
  //comes before components, helps set up fundamental for everything else
  constructor(props) {
    super(props);
    // this.state = {
    //   array: ['fix', 'them', 'bugs']
    //}
    //can bind handleClick() to state here as well as when calling function
    // this.handleClick = this.handleClick.bind(this);
    this.state = {
      user_name: 'Kasey',
      profession: 'Developer'
    };
  }

  //method part of Component Class
  componentDidMount() {
    console.log('mounted')
  }
  //not a built in function of library
  //it cannot inherently setState or access state
  //it needs binds
  handleClick() {
    this.setState ({
      user_name: "Kasey Colian",
      profession: "Future Sr Developer"
    });
  }

  //method part of Component Class
  render() {

    //one way to reference array in state is to declare a variable instead of calling this.state.array directly
    // const { array } = this.state;

    const style = {fontSize: '100px'};
    

    //variables get added w/ {}
    //components get added with <>

    return (
      <div className = "header">
        <p style={style}>
          {this.state.user_name} - {this.state.profession}
        </p>
        <NameComponent/>
          {/* binding handleClick() to state. render() has access to state, handleClick() doesn't */}
          <button onClick = {this.handleClick.bind(this)}>
            <NameComponent/>
        </button>
      </div>
    );
  }
}

export default App;
