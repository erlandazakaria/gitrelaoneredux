import React, { Component } from 'react';
import { Navbar, NavbarBrand, NavbarNav, NavItem, NavLink, NavbarToggler, Collapse, Container } from 'mdbreact';
import imgEvent from '../images/icone.svg';
import imgPendaftar from '../images/iconp.svg';
// import imgSetting from './icons.svg';

class NavbarPage extends Component {

  state = {
    collapseID: ''
  }

  toggleCollapse = collapseID => (wow) => {
    this.setState(prevState => ({ collapseID: (prevState.collapseID !== collapseID ? collapseID : '') }));
  }

  render() {
    return (
    <div>
      <Container style={{"padding":"0px", "width":"300px", "marginBottom":"20px"}}>
        <Navbar color="white" light>
          <Container style={{"padding":"10px 0 10px 5px"}}>
            <NavbarBrand style={{"fontSize":"16px", "fontWeight":"800"}}>
              <img alt="Profile Icons" src={imgPendaftar} style={{"marginRight":"15px"}} />USERNAME
            </NavbarBrand>
          </Container>
        </Navbar>
    </Container>

      <Container style={{"padding":"0px", "width":"300px"}}>
        <Navbar color="white" light>
          <Container style={{"padding":"10px 0 10px 5px"}}>
            <NavbarBrand style={{"fontSize":"16px"}}>
              <img alt="Registrant Icons" src={imgPendaftar} style={{"marginRight":"15px"}} />Profile
            </NavbarBrand>
            <NavbarToggler onClick={this.toggleCollapse('navbarCollapse1')} style={{"margin":"0"}}/>
            <Collapse id="navbarCollapse1" isOpen={this.state.collapseID} navbar>
              <NavbarNav left style={{"paddingLeft":"50px", "paddingTop":"10px"}}>
                <NavItem>
                  <NavLink to="/profile">My Profile</NavLink>
                </NavItem>
              </NavbarNav>
            </Collapse>
          </Container>
        </Navbar>
    </Container>

    <Container style={{"padding":"0px", "width":"300px"}}>
    <Navbar color="white" light>
      <Container style={{"padding":"10px 0 10px 5px"}}>
        <NavbarBrand style={{"fontSize":"16px"}}>
        <img alt="Event Icons" src={imgEvent} style={{"marginRight":"15px"}} />  Events
        </NavbarBrand>
        <NavbarToggler onClick={this.toggleCollapse('navbarCollapse2')} style={{"margin":"0"}}/>
        <Collapse id="navbarCollapse2" isOpen={this.state.collapseID} navbar>
        <NavbarNav left style={{"paddingLeft":"50px", "paddingTop":"10px"}}>
        <NavItem>
            <NavLink to="/event_list">Event List</NavLink>
              </NavItem>
            <NavItem>
              <NavLink to="#!">Event Recomendations</NavLink>
            </NavItem>
          </NavbarNav>
        </Collapse>
      </Container>
    </Navbar>
    </Container>
    </div> 
    );
  }
}

export default NavbarPage;