import React from 'react';
import { Link } from 'react-router-dom';
import {
  Navbar, NavItem, Nav
} from 'react-bootstrap';

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
        <NavItem eventKey={1}>
          <Link to="/course">Courses</Link>
        </NavItem>
        <NavItem eventKey={2}>
          <Link to="/teacher">Teachers</Link>
        </NavItem>
      </Nav>
      <Nav pullRight>
        <NavItem eventKey={1}>
          <Link to="/course">Courses</Link>
        </NavItem>
        <NavItem eventKey={2}>
          <Link to="/teacher">Teachers</Link>
        </NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);