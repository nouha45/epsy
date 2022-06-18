import React, { Component } from 'react';
import logo from '../../src/logo.svg'
import 'bootstrap/dist/css/bootstrap.css'

import { Nav, Navbar, NavDropdown } from 'react-bootstrap'

class HeaderComponent extends Component {
   constructor(props){
    super(props)
    this.state = {

    }
   }
   
    render() {
        return (
            <div>
            <Navbar bg="dark" variant="dark"
        sticky="top" expand="sm" collapseOnSelect>
        <Navbar.Brand>
          <img src={logo} width="40px" height="40px" />{' '}
          E-psy
        </Navbar.Brand>

        <Navbar.Toggle className="coloring" />
        <Navbar.Collapse>
          <Nav>
            <NavDropdown title="Crud">
              <NavDropdown.Item href="#Crud/Doctors">Doctors</NavDropdown.Item>
              <NavDropdown.Item href="#Crud/Patients">Patients</NavDropdown.Item>
              <NavDropdown.Divider />
              
            </NavDropdown>
            <Nav.Link href="#about-us">About Us</Nav.Link>
            <Nav.Link href="#contact-us">Contact Us</Nav.Link>
            <Nav.Link href="#logout">Logout</Nav.Link>

          </Nav>
        </Navbar.Collapse>

      </Navbar>
      
      </div>
        );
    }
}

export default HeaderComponent;