import React from 'react'
import {
  Navbar, Collapse, Nav, NavItem, NavbarText,
} from 'reactstrap';
import { Link } from 'react-router-dom';

function MyNavbar() {
  return (
    <div>
      <Navbar
          color="danger"
          expand="md"
          full
          light
        >
          <Collapse navbar>
            <Nav
              className="me-auto"
              navbar
            >
              <NavItem>
                <Link to="/random">Random Jokes</Link>
              </NavItem>
              <NavItem>
                <Link to="/without-chuck">Jokes Without Chuck</Link>
              </NavItem>
              <NavItem>
                <Link to="/fav">Favorite Jokes</Link>
              </NavItem>
            </Nav>
            <NavbarText>
              Don't mess with Chuck!
            </NavbarText>
          </Collapse>
        </Navbar>
    </div>
  )
}

export default MyNavbar
