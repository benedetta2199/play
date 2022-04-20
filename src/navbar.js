import React from 'react'
import { Nav, Navbar, NavDropdown} from 'react-bootstrap';
//import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
import style from '../style/footer.module.css';

function NavBar() {
    return( 
        <Navbar collapseOnSelect expand="lg" variant="dark" className="px-md-5 px-1 py-1">
            <Navbar.Brand href="./"><img src="./logo.png" className="align-top" alt="Play logo"/></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ms-auto bd-highlight">
                    <Nav.Link href="./">Home</Nav.Link>
                    <Nav.Link href="./emotion" className="d-none d-md-block">
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
                    
                    <Nav.Link href="./emozioni" className='d-md-none mb-0 pb-0'>Emozioni</Nav.Link>
                    <Nav.Link href="./ansia" className='d-md-none py-0 my-0 px-3'>Ansia</Nav.Link>
                    <Nav.Link href="./bellezza" className='d-md-none py-0 my-0 px-3'>Bellezza</Nav.Link>
                    <Nav.Link href="./calma" className='d-md-none py-0 my-0 px-3'>Calma</Nav.Link>
                    <Nav.Link href="./divertimento" className='d-md-none py-0 my-0 px-3'>Divertimento</Nav.Link>
                    <Nav.Link href="./energia" className='d-md-none py-0 my-0 px-3'>Energia</Nav.Link>
                    <Nav.Link href="./fastidio" className='d-md-none py-0 my-0 px-3'>Fastidio</Nav.Link>
                    <Nav.Link href="./gioia" className='d-md-none py-0 my-0 px-3'>Gioia</Nav.Link>
                    <Nav.Link href="./passione" className='d-md-none py-0 my-0 px-3'>Passione</Nav.Link>
                    <Nav.Link href="./paura" className='d-md-none py-0 my-0 px-3'>Paura</Nav.Link>
                    <Nav.Link href="./sfida" className='d-md-none py-0 my-0 px-3'>Sfida</Nav.Link>
                    <Nav.Link href="./sogno" className='d-md-none py-0 my-0 px-3'>Sogno</Nav.Link>
                    <Nav.Link href="./trionfo" className='d-md-none py-0 my-0 px-3'>Trionfo</Nav.Link>
                    <Nav.Link href="./tristezza" className='d-md-none py-0 my-0 px-3'>Tristezza</Nav.Link>
                        
                    <Nav.Link href="./">L'idea</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavBar;