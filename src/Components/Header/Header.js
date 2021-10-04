import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <Navbar bg="dark" variant="dark">
        <Container className="naveContainer">
            <NavLink className="navLink" to="/home">Home</NavLink>
           <NavLink  className="navLink servicesLink" to="/services">Services</NavLink> 
           <NavLink  className="navLink contestLink" to="/contest">Contest</NavLink>
           <NavLink  className="navLink aboutLink" to="/about">About</NavLink>
        </Container>
      </Navbar>
    );
};

export default Header;