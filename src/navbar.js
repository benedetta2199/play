import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import style from '../style/footer.module.css';

function NavBar() {
    return( 
        <Navbar variant="dark" className="px-md-5 px-1 py-1">
            <a href="/" className='d-sm-none d-md-inline'>
                <img src="./logo.png" className="d-inline-block align-top" alt="React Bootstrap logo"/>
            </a>
                <Nav className="ms-auto bd-highlight">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/emotion">
                        <NavDropdown title="Emozioni" menuVariant="dark" className={style.dropdown}>
                        <NavDropdown.Item href="./emozioni" className='m-0 px-2 text-end'>Emozioni</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="./ansia" className='m-0 px-1'>Ansia</NavDropdown.Item>
                                <NavDropdown.Item href="./bellezza" className='m-0 px-1'>Bellezza</NavDropdown.Item>
                                <NavDropdown.Item href="./calma" className='m-0 px-1'>Calma</NavDropdown.Item>
                                <NavDropdown.Item href="./divertimento" className='m-0 px-1'>Divertimento</NavDropdown.Item>
                                <NavDropdown.Item href="./energia" className='m-0 px-1'>Energia</NavDropdown.Item>
                                <NavDropdown.Item href="./fastidio" className='m-0 px-1'>Fastidio</NavDropdown.Item>
                                <NavDropdown.Item href="./gioia" className='m-0 px-1'>Gioia</NavDropdown.Item>
                                <NavDropdown.Item href="./passione" className='m-0 px-1'>Passione</NavDropdown.Item>
                                <NavDropdown.Item href="./paura" className='m-0 px-1'>Paura</NavDropdown.Item>
                                <NavDropdown.Item href="./sfida" className='m-0 px-1'>Sfida</NavDropdown.Item>
                                <NavDropdown.Item href="./sogno" className='m-0 px-1'>Sogno</NavDropdown.Item>
                                <NavDropdown.Item href="./trionfo" className='m-0 px-1'>Trionfo</NavDropdown.Item>
                                <NavDropdown.Item href="./tristezza" className='m-0 px-1'>Tristezza</NavDropdown.Item>
                        </NavDropdown>
                    </Nav.Link>
                    <Nav.Link href="/">L'idea</Nav.Link>
                </Nav>
        </Navbar>
    )
}

export default NavBar;