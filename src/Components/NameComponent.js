import React, { Component } from 'react';

class NameComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name_displayed: "First Name"
    }
  }

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
  
  render() {
    const {user_name} = this.props;
    const {name_displayed} = this.state;
    const style = {color: 'magenta'};
    const style2 = {color: 'blue'};

    return (
      <div>
      <p style={style}>{name_displayed}</p>
      <p style = {style2}>{user_name ? user_name : 'No User Here'}</p>
      </div>
    );
  }
}

export default NameComponent;