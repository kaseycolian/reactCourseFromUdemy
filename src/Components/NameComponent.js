import React, { Component } from 'react';

class NameComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name_displayed: "First Name"
    }
  }


  //method part of Component Class
  componentDidMount() {
    console.log('Mounted Name')
  }

  //part of Component Class
  componentWillReceiveProps(nextProps){
    console.log(nextProps)
    //using properties to display how the state is displayed
    //if name changed
    if (this.props.user_name !== nextProps.user_name) {
      //if there is a space in name display full name
      if (nextProps.user_name.indexOf (' ') > -1 ) {
        this.setState ({
          name_displayed : 'Full Name'
        })
      } else {
        //if no space, then just first name
        this.setState({
          name_displayed : 'First Name'
        })
      }
    }
  }
  //method part of Component Class
  render() {
    const {user_name} = this.props;
    const {name_displayed} = this.state;

    return (
      <div>
      <p>{name_displayed}</p>
    {/* Can user ternary inline if no prop is defined when component used
        There is no user_name set, so this will display as 'No Name' until one is set.
    */} 
       <p>{user_name ? user_name : 'No User Here'}</p>
      </div>
    );
  }
}

export default NameComponent;