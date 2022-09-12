import React from 'react'
import { Container, FormControl, Navbar, NavbarBrand, Nav, Badge } from 'react-bootstrap'
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Header = () => {
  return <Navbar bg='dark' variant='dark'>
    <Container>
        <NavbarBrand>
            <Link to='/'>Shopping Cart</Link>
        </NavbarBrand>
        <Navbar.Text>
            <FormControl
            style={{ width: 500 }}
            placeholder="find an item"
            className='m-auto' />
        </Navbar.Text>
        <Nav>
            <a className='btn btn-sm' href='/cart'>
                <FaShoppingCart color="white" fontSize="25px" />
                <Badge style={{ textColor: 'red' }}>{ 0 }</Badge>
            </a>
        </Nav>
    </Container>
    </Navbar>
}

export default Header