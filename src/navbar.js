import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
function NavBar() {
    return( 
        <Navbar variant="dark" className="px-md-5 px-1 py-1">
            <a href="/">
                <img src="/logo.png" width="50" height="50" className="d-inline-block align-top" alt="React Bootstrap logo"/>
            </a>
                <Nav className="ms-auto bd-highlight">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/emotion">Emozioni</Nav.Link>
                    <Nav.Link href="/">L'idea</Nav.Link>
                </Nav>
        </Navbar>
    )
}

export default NavBar;