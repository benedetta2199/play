import React from 'react'
import { Col, Container, Nav, NavDropdown, Row } from 'react-bootstrap';
import style from '../style/footer.module.css';
import {Instagram, Spotify} from 'react-bootstrap-icons';

function Footer() {
    return( 
        <footer>
            <Container>
            <Row className='pt-5'>
                <Col md={4}>
                    <div className="d-flex align-items-center">
                    <img src="/logo.png" className='mx-2' alt=""/>
                    <h2 className='m-0'>Play</h2>
                    </div>
                    <div>
                    <ul className={style.social + " d-flex"}>
                        <li><a href="https://open.spotify.com/user/31wewhnfbjvgb4agzwv3smf2isve?si=svnygb10RLmvORRjWiCRGg&utm_source=copy-link" className={style.sp}><Spotify/></a></li>
                        <li><a href="https://instagram.com/play.experiences" className={style.ig}><Instagram/></a></li>
                    </ul>
                    </div>
                </Col>
                <Col md={8} className='d-flex justify-content-end'>
                    <Row className='w-75 text-end text-light'>
                        <Col xs={5}><Nav.Link href='/' className='text-light text-decoration-none'>Home</Nav.Link></Col>
                        <Col xs={4}>
                            <NavDropdown title="Emozioni" menuVariant="dark" className={style.dropdown}>
                                <NavDropdown.Item href="/emozioni" className='px-2 text-end'>Emozioni</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="/ansia" className='px-1'>Ansia</NavDropdown.Item>
                                <NavDropdown.Item href="/bellezza" className='px-1'>Bellezza</NavDropdown.Item>
                                <NavDropdown.Item href="/calma" className='px-1'>Calma</NavDropdown.Item>
                                <NavDropdown.Item href="/divertimento" className='px-1'>Divertimento</NavDropdown.Item>
                                <NavDropdown.Item href="/energia" className='px-1'>Energia</NavDropdown.Item>
                                <NavDropdown.Item href="/fastidio" className='px-1'>Fastidio</NavDropdown.Item>
                                <NavDropdown.Item href="/gioia" className='px-1'>Gioia</NavDropdown.Item>
                                <NavDropdown.Item href="/passione" className='px-1'>Passione</NavDropdown.Item>
                                <NavDropdown.Item href="/paura" className='px-1'>Paura</NavDropdown.Item>
                                <NavDropdown.Item href="/sfida" className='px-1'>Sfida</NavDropdown.Item>
                                <NavDropdown.Item href="/sogno" className='px-1'>Sogno</NavDropdown.Item>
                                <NavDropdown.Item href="/trionfo" className='px-1'>Trionfo</NavDropdown.Item>
                                <NavDropdown.Item href="/tristezza" className='px-1'>Tristezza</NavDropdown.Item>
                            </NavDropdown>
                        </Col>
                        <Col xs={3}><Nav.Link href='/idea' className='text-light text-decoration-none'>L'Idea</Nav.Link></Col>
                    </Row>
                </Col>
            </Row>
            </Container>            
            <div className="text-center text-sm p-2"><small>© 2022 Copyright - 
                <a href='./documentazione' className='text-light text-decoration-none'> Documentazione</a></small>
            </div>
        </footer>
    )
}

export default Footer;