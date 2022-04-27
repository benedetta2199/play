import Head from 'next/head'
import { Button, Col, Container, Row } from 'react-bootstrap';
import Piano from '../src/piano';
import style from '../style/idea.module.css';
import { SkipBackwardFill, SkipForwardFill, ChevronDoubleDown, ChevronDoubleRight } from 'react-bootstrap-icons';
import Helmet from 'react-helmet';

export default function Home() {
  return (
    <div className="container">
      <Helmet>
        <title>Play - L'idea</title>
        <meta name="description" content="" />
      </Helmet>

        <Row>
          <Col md={6} xs={12}>
            <div className={style.imgHead + " imgCredit"}>
              <img className={style.img_girl + " w-100"} src="./time-line-glow.jpg" alt=""/>
              <a href="https://www.freepik.com/freepik" className="credit" target="_blank">created by freepik & kbza - www.freepik.com</a>
            </div>
          </Col>
          <Col md={6} xs={12}>
            <h1 className={style.title + " text-uppercase text-center w-100 mt-md-4 mt-2"}>
                <SkipBackwardFill className={style.titleCommand + " ml-0"}/>
                <img src="./logo.png" className={style.logo} alt="Play"/>
                <SkipForwardFill className={style.titleCommand + " mr-0"}/>
            </h1>
            <h2 className={style.subtitle}>Un nuovo modo di ascoltare la musica</h2>
            
          </Col>
        </Row>

        <Container className="text-light text-center my-md-5 pt-md-5" id="more">
          <Row className="mt-5 pt-md-5">
            <Col>
              <h3 className="display-4 text-capitalize">Ascolta il suono delle tue emozioni</h3>
              
            </Col>
          </Row>     
        </Container>

        <Container className="text-light text-center my-md-5 pt-md-5">
          <Row className="mt-5 pt-5">
            <Col>
              <h3 className="display-4 text-capitalize">Cervello e musica</h3>
              
              <p>Lorem ???</p>
              <Button variant="outline-light" className="btn-outline my-3" href="/idea">
                <ChevronDoubleRight/> <span className="mx-3">Scopri di più</span>
              </Button>
            </Col>
          </Row>     
        </Container>
    </div>
  )
}