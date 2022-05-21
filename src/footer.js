import React from 'react'
import { Col, Container, Nav, NavDropdown, Row } from 'react-bootstrap';
import style from '../style/footer.module.css';
import {Instagram, Spotify} from 'react-bootstrap-icons';

function Footer() {
    return( 
        <footer>
            <Container>
            <Row className='pt-5 overflow-hidden'>
                <Col md={2} xs={12}>
                    <div className="d-flex align-items-center">
                    <img src="/logo.png" className='mx-2' alt=""/>
                    <h2 className='m-0'>Play</h2>
                    </div>
                    <div>
                    <ul className={style.social + " d-flex"}>
                        <li><a href="https://open.spotify.com/user/31wewhnfbjvgb4agzwv3smf2isve?si=svnygb10RLmvORRjWiCRGg&utm_source=copy-link" target="_blank" className={style.sp}>
                        <span className='d-none'>Pagina Spotify</span><Spotify/>
                        </a></li>
                        <li><a href="https://instagram.com/play.experiences" target="_blank" className={style.ig}>
                            <span className='d-none'>Pagina Instgram</span><Instagram/>
                        </a></li>
                    </ul>
                    </div>
                </Col>
                <Col md={10} xs={12} className='d-flex justify-content-end px-0 mx-0'>
                    <Row className='w-100 text-end text-light'>
                        <Col md={6} xs={1}></Col>
                        <Col md={2} xs={3}><Nav.Link href='/' className='text-light text-decoration-none'>Home</Nav.Link></Col>
                        <Col md={2} xs={4} className="px-0">
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
                        <Col md={2} xs={4} className="pr-1">
                            <Nav.Link href='/about' className='text-light text-decoration-none pl-0 pr-2'>About Us</Nav.Link>
                        </Col>
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