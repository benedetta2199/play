import Head from 'next/head'
import { Button, Col, Container, Row } from 'react-bootstrap';
import Piano from '../src/piano';
import style from '../style/index.module.css';
import { SkipBackwardFill, SkipForwardFill, ChevronDoubleDown, ChevronDoubleRight } from 'react-bootstrap-icons';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Play</title>
      </Head>

      <main>
        <Row className="my-md-5 pt-3">
          <Col md={6} className="my-md-5">
            <h1 className={style.title + " text-uppercase text-center w-100 mt-4"}>
                <SkipBackwardFill className={style.titleCommand}/>
                <img src="./logo.png" className={style.logo} alt="Play"/>
                <SkipForwardFill className={style.titleCommand}/>
          </h1>
            <h2 className={style.subtitle}>Ascolta le tue emozioni</h2>
            <p className={style.description}>
              Scopri un nuovo modo di ascoltare la musica.
              <br/> Lasciati guidare dalle emozioni per trovare il brano di cui hai bisgno.
              <br/>
              <Button variant="outline-light" className="btn-outline m-5 my-4" href="#more">
                <ChevronDoubleDown/> <span className="mx-3">Scopri di più</span> <ChevronDoubleDown/>
              </Button>
            </p>
          </Col>
          <Col md={6}>
            <div className={style.imgHead + " imgCredit"}>
              <img className={style.img_girl + " w-100"} src="./tristezza.jpg" alt=""/>
              <a href="https://www.freepik.com/photos/african-dance" className="credit">created by master1305 - www.freepik.com</a>
            </div>
          </Col>
        </Row>

        <Container className="text-light text-center my-md-5 pt-md-5" id="more">
          <Row className="mt-5 pt-md-5">
            <Col>
              <h3 className="display-4 text-capitalize">Il suono delle emozioni</h3>
              <Piano/>
              <p>Suona lo stato d'animo che stai provando o che vuoi provare per scoprire i brani che possono suscitarlo</p>
              <Button variant="outline-light" className="btn-outline my-3" href="/emotion">
                <ChevronDoubleRight/> <span className="mx-3">Scopri di più</span>
              </Button>
            </Col>
          </Row>     
        </Container>

        <Container className="text-light text-center my-md-5 pt-md-5">
          <Row className="mt-5 pt-5">
            <Col>
              <h3 className="display-4 text-capitalize">Cervello e musica</h3>
              
              <p id="more">Suona lo stato d'animo che stai provando o che vuoi provare per scoprire i brani che possono suscitarlo</p>
              <Button variant="outline-light" className="btn-outline my-3" href="/idea">
                <ChevronDoubleRight/> <span className="mx-3">Scopri di più</span>
              </Button>
            </Col>
          </Row>     
        </Container>
      </main>
    </div>
  )
}
