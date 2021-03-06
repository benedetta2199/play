import Head from 'next/head'
import { Button, Col, Container, Row } from 'react-bootstrap';
import Piano from '../src/piano';
import style from '../style/index.module.css';
import { SkipBackwardFill, SkipForwardFill, ChevronDoubleDown, ChevronDoubleRight } from 'react-bootstrap-icons';
import Helmet from 'react-helmet';
import { Link } from 'react-scroll/modules';

export default function Home() {
  return (
    <div className="container">
      <Helmet>
        <title>Play - Ascolta le tue emozioni</title>
        <meta name="description"
         content="Ascolta la musica giusta per il tuo stato d'animo gratuitamente. Vivi un esperienza unica... ascolta le tue emozioni! " />
      </Helmet>

        <Row className="my-md-5 pt-3">
          <Col md={6} xs={12} className="my-md-5">
            <h1 className={style.title + " text-uppercase text-center w-100 mt-md-4 mt-2"}>
              <span className='d-none'>Musica free emozioni music gratis</span>
                <SkipBackwardFill className={style.titleCommand + " ml-0"}/>
                <img src="./logo.png" className={style.logo} alt="Play"/>
                <SkipForwardFill className={style.titleCommand + " mr-0"}/>
          </h1>
            <h2 className={style.subtitle}>Ascolta le tue emozioni</h2>
            <p className={style.description}>
              Scopri un nuovo modo di ascoltare la musica.
              <br/> Lasciati guidare dalle emozioni per trovare il brano di cui hai bisgno.
              <br/>
              <Link to="more" spy={true}  smooth={true} offset={-100} duration={500} className="btn btn-outline btn-outline-light m-5 my-4" >
                  <ChevronDoubleDown/> <span className="mx-3">Scopri di più</span> <ChevronDoubleDown/>
              </Link>
            </p>
          </Col>
          <Col md={6} xs={12}>
            <div className={style.imgHead + " imgCredit"}>
              <img className={style.img_girl + " w-100"} src="./girl-headphone.jpg" alt=""/>
              <a href="https://www.freepik.com/free-photo/headphones-african-american-woman-s-portrait-isolated-dark-studio-background-multicolored-neon-light-beautiful-female-model-concept-human-emotions-facial-expression-sales-ad-fashion_14224368.htm" className="credit" target="_blank">created by master1305 - www.freepik.com</a>
            </div>
          </Col>
        </Row>

        <Container className="text-light text-center my-md-5 pt-md-5" id="more">
          <Row className="mt-5 pt-md-5">
            <Col>
              <h3 className="display-4 text-capitalize">Il suono delle emozioni</h3>
              <Piano/>
              <p>Suona lo stato d'animo che stai provando o che vuoi provare per scoprire i brani che possono suscitarlo</p>
              <Button variant="outline-light" className="btn-outline my-3" href="/emozioni">
                <ChevronDoubleRight/> <span className="mx-3">Vedi tutte le emozioni</span>
              </Button>
            </Col>
          </Row>     
        </Container>

        <Container className="text-light text-center my-md-5 pt-md-5">
          <Row className="mt-5 pt-5">
            <Col>
              <h3 className="display-4 text-capitalize">Sei curioso?</h3>
              
              <p>Vuoi sapere da cosa è nata l'idea ed il progetto? Perchè ascoltare musica in base allo stato d'animo provato? 
                <br/>Le basi scientifiche e i benefici di tutto ciò? Puoi trovare tutto questo e anche di più nella sezione About us.
              </p>
              <Button variant="outline-light" className="btn-outline my-3" href="/about">
                <ChevronDoubleRight/> <span className="mx-3">Leggi</span>
              </Button>
            </Col>
          </Row>     
        </Container>
    </div>
  )
}