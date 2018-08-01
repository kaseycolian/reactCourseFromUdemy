import React, { Component } from 'react';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem, Table } from 'react-bootstrap'
import Select from 'react-select';
import MapComponent from './MapComponent';

import { connect } from 'react-redux';

import { fetchInfo } from '../actions/actions_info'

class AppComponent extends Component {
  //comes before components, helps set up fundamental for everything else
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: null,
      jsonList: []
    };
  }
  //happens once a setState call happens (ie: button click in this code)
  componentDidUpdate() {
    console.log('changes');
  }

//Load initial data when page loads - this will happen here on page load
//When component Mounts, it calls in fetchInfo()
  //has to be wrapped in this.props.dispatch to alert rest of Redux that something is happening
  componentDidMount() {
    this.props.dispatch(fetchInfo());
  }

  //needs to be binded to effect state b/c it's a function not inherent to Component Class
  //binded in onChange in render()
  handleChange(selectedOption) {
    this.setState({
     selectedOption : selectedOption ? selectedOption : ''
    });   
    console.log(`Option selected:`, selectedOption);
     }

  render() {
    const { selectedOption } = this.state;

    const selectList = this.state.jsonList.map(item => {
      return { value : item.name, label: item.name}
    })

    return (

      <div>
        <Navbar inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#home">KC's Page</a>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav pullRight>
            <NavItem eventKey={1} href="#">
              Home
            </NavItem>
            <NavItem eventKey={2} href="#">
              Link
            </NavItem>
            <NavDropdown eventKey={3} title="Data Views" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1}>List</MenuItem>
              <MenuItem eventKey={3.2}>Search</MenuItem>
              <MenuItem eventKey={3.3}>Something else here</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={3.4}>Separated link</MenuItem>
            </NavDropdown>
          </Nav>
        </Navbar>        
        <div className = "container">
          <div className = "row">
            <div className = "col-sm-12">
              <h1>Kasey's Page</h1>
              <p>Here we'll list some data from a bunch of sources!</p>
              <div className = "row">
                <div className = "col-sm-3">
                  <Select
                    placeholder = "Select a name..."
                    // isMulti = "true"
                    name="form-field-name"
                    value={selectedOption}
                    //when a name is selected from the list, it will change the state to that name
                    onChange={this.handleChange.bind(this)}
                    escapeClearsValueboolean 
                    options=
                      {selectList}
                  />
                </div>
              </div>
              <hr />
              <div className = "row">
                <div className = "col-sm-9">
                  <Table striped bordered condensed hover>
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Address</th>
                        <th>Age</th>
                        <th>Company</th>
                      </tr>
                    </thead>
                    <tbody>                         
                      {this.state.jsonList.map(item => {
                        //comparing to select list selection
                        //this conditional will make it return everything if null or just the item for the selectedOption
                        if (selectedOption === null || item.name === selectedOption.value) {
                          console.log(selectedOption)
                          return (
                            <tr key={item._id}>
                              <td>{item.name}</td>
                              <td>{item.address}</td>
                              <td>{item.age}</td>
                              <td>{item.company}</td>
                            </tr>
                          )
                        }                     
                      })}
                    </tbody>
                  </Table>
                </div>
              </div> 
            </div>
          </div>
        </div>
        <MapComponent/>
      </div>
    );
  }
}

const App = connect()(AppComponent);

export default App;
