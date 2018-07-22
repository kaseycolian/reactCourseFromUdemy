import React, { Component } from 'react';
import NameComponent from './Components/NameComponent'

class App extends Component {
  //comes before components, helps set up fundamental for everything else
  constructor(props) {
    super(props);
    //can bind handleClick() to state here as well as when calling function
    // this.handleClick = this.handleClick.bind(this);
    this.state = {
      user_name: 'Kasey',
      profession: 'Developer'
    };
  }
  //happens once a setState call happens (ie: button click in this code)
  componentDidUpdate() {
    console.log('changes');
  }

  //method part of Component Class
  componentDidMount() {
    console.log('mounted')
  }
  
  handleClick() {
    this.setState ({
      user_name: "Kasey R Colian",
      profession: "Future Sr Developer"
    });
  }

  //method part of Component Class
  render() {

    //one way to reference array in state is to declare a variable instead of calling this.state.array directly
    // const { array } = this.state;

    const style = {color: 'purple', fontSize: '100px'};
    
    return (
      <div className = "header">
        <p style={style}>
          {this.state.user_name} - {this.state.profession}
        </p>

        <NameComponent user_name={this.state.user_name}/>

        <button onClick = {this.handleClick.bind(this)}>
            <NameComponent/>
        </button>

      </div>
    );
  }
}

export default App;
