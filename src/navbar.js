import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import style from '../style/footer.module.css';

function NavBar() {
    return( 
        <Navbar variant="dark" className="px-md-5 px-1 py-1">
            <a href="/">
                <img src="./logo.png" className="d-inline-block align-top" alt="React Bootstrap logo"/>
            </a>
                <Nav className="ms-auto bd-highlight">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/emotion">
                        <NavDropdown title="Emozioni" menuVariant="dark" className={style.dropdown}>
                            <NavDropdown.Item href="#action/3.1" className='m-0 px-2 text-end'>Emozioni</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.1" className='px-1 m-0'>Ansia</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2" className='px-1 m-0'>Bellezza</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3" className='px-1 m-0'>Calma</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.4" className='px-1 m-0'>Divertimento</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.1" className='px-1 m-0'>Energia</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2" className='px-1 m-0'>Gioia</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3" className='px-1 m-0'>Irritazione</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.4" className='px-1 m-0'>Passione</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.1" className='px-1 m-0'>Paura</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2" className='px-1 m-0'>Sfida</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3" className='px-1 m-0'>Sogno</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.4" className='px-1 m-0'>Trionfo</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.4" className='px-1 m-0'>Tristezza</NavDropdown.Item>
                        </NavDropdown>
                    </Nav.Link>
                    <Nav.Link href="/">L'idea</Nav.Link>
                </Nav>
        </Navbar>
    )
}

export default NavBar;