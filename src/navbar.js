import React from 'react'
import { Nav, Navbar, NavDropdown} from 'react-bootstrap';
//import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
import style from '../style/footer.module.css';

function NavBar(props) {
    const {page} = props;
    const menuact = (page!= "/" && page!='/idea');

    return( 
        <Navbar collapseOnSelect expand="lg" variant="dark" className="px-md-5 px-1 py-1">
            <Navbar.Brand href="/"><img src="/logo.png" className="align-top" alt="Play logo"/></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ms-auto bd-highlight">
                    <Nav.Link href="/" className={(page==='/'? 'active':'')}>Home</Nav.Link>
                    <Nav.Link href="#" className=" d-none d-md-block">
                        <NavDropdown title="Emozioni" menuVariant="dark" className={style.dropdown + (menuact? ' active':'')}>
                        <NavDropdown.Item href="/emozioni" className={(page=='/emozioni'? 'active ':'') + 'm-0 px-2 text-end'}>Emozioni</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="/ansia" className={(page=='/ansia'? 'active ':'') + 'm-0 px-1'}>Ansia</NavDropdown.Item>
                                <NavDropdown.Item href="/bellezza" className={(page=='/bellezza'? 'active ':'') + 'm-0 px-1'}>Bellezza</NavDropdown.Item>
                                <NavDropdown.Item href="/calma" className={(page=='/calma'? 'active ':'') + 'm-0 px-1'}>Calma</NavDropdown.Item>
                                <NavDropdown.Item href="/divertimento" className={(page=='/divertimento'? 'active ':'') + 'm-0 px-1'}>Divertimento</NavDropdown.Item>
                                <NavDropdown.Item href="/energia" className={(page=='/energia'? 'active ':'') + 'm-0 px-1'}>Energia</NavDropdown.Item>
                                <NavDropdown.Item href="/fastidio" className={(page=='/fastidio'? 'active ':'') + 'm-0 px-1'}>Fastidio</NavDropdown.Item>
                                <NavDropdown.Item href="/gioia" className={(page=='/gioia'? 'active ':'') + 'm-0 px-1'}>Gioia</NavDropdown.Item>
                                <NavDropdown.Item href="/passione" className={(page=='/passione'? 'active ':'') + 'm-0 px-1'}>Passione</NavDropdown.Item>
                                <NavDropdown.Item href="/paura" className={(page=='/paura'? 'active ':'') + 'm-0 px-1'}>Paura</NavDropdown.Item>
                                <NavDropdown.Item href="/sfida" className={(page=='/sfida'? 'active ':'') + 'm-0 px-1'}>Sfida</NavDropdown.Item>
                                <NavDropdown.Item href="/sogno" className={(page=='/sogno'? 'active ':'') + 'm-0 px-1'}>Sogno</NavDropdown.Item>
                                <NavDropdown.Item href="/trionfo" className={(page=='/trionfo'? 'active ':'') + 'm-0 px-1'}>Trionfo</NavDropdown.Item>
                                <NavDropdown.Item href="/tristezza" className={(page=='/tristezza'? 'active ':'') + 'm-0 px-1'}>Tristezza</NavDropdown.Item>
                        </NavDropdown>
                    </Nav.Link>
                    
                    <Nav.Link href="/emozioni" className={(page=='/emozioni'? 'active ':'') + 'd-md-none mb-0 pb-0'}>Emozioni</Nav.Link>
                    <Nav.Link href="/ansia" className={(page=='/ansia'? 'active ':'') + 'd-md-none py-0 my-0 px-3'}>Ansia</Nav.Link>
                    <Nav.Link href="/bellezza" className={(page=='/bellezza'? 'active ':'') + 'd-md-none py-0 my-0 px-3'}>Bellezza</Nav.Link>
                    <Nav.Link href="/calma" className={(page=='/calma'? 'active ':'') + 'd-md-none py-0 my-0 px-3'}>Calma</Nav.Link>
                    <Nav.Link href="/divertimento" className={(page=='/divertimento'? 'active ':'') + 'd-md-none py-0 my-0 px-3'}>Divertimento</Nav.Link>
                    <Nav.Link href="/energia" className={(page=='/energia'? 'active ':'') + 'd-md-none py-0 my-0 px-3'}>Energia</Nav.Link>
                    <Nav.Link href="/fastidio" className={(page=='/fastidio'? 'active ':'') + 'd-md-none py-0 my-0 px-3'}>Fastidio</Nav.Link>
                    <Nav.Link href="/gioia" className={(page=='/gioia'? 'active ':'') + 'd-md-none py-0 my-0 px-3'}>Gioia</Nav.Link>
                    <Nav.Link href="/passione" className={(page=='/passione'? 'active ':'') + 'd-md-none py-0 my-0 px-3'}>Passione</Nav.Link>
                    <Nav.Link href="/paura" className={(page=='/paura'? 'active ':'') + 'd-md-none py-0 my-0 px-3'}>Paura</Nav.Link>
                    <Nav.Link href="/sfida" className={(page=='/sfida'? 'active ':'') + 'd-md-none py-0 my-0 px-3'}>Sfida</Nav.Link>
                    <Nav.Link href="/sogno" className={(page=='/sogno'? 'active ':'') + 'd-md-none py-0 my-0 px-3'}>Sogno</Nav.Link>
                    <Nav.Link href="/trionfo" className={(page=='/triondo'? 'active ':'') + 'd-md-none py-0 my-0 px-3'}>Trionfo</Nav.Link>
                    <Nav.Link href="/tristezza" className={(page=='/tristezza'? 'active ':'') + 'd-md-none py-0 my-0 px-3'}>Tristezza</Nav.Link>
                        
                    <Nav.Link href="/" className={(page=='/idea'? 'active':'')}>L'idea</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavBar;