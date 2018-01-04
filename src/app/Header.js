import React from 'react';
import { Link } from 'react-router-dom';
import {
  Navbar, NavItem, Nav
} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

export default () => (
  <Navbar inverse collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <Link to="/">Jiangren</Link>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
          <LinkContainer to="/course">
            <NavItem>Courses</NavItem>
          </LinkContainer>
          <LinkContainer to="/teacher">
            <NavItem>Teachers</NavItem>
          </LinkContainer>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);