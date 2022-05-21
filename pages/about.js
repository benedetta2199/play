import { Button, Col, Container, Row } from 'react-bootstrap';
import Piano from '../src/piano';
import style from '../style/idea.module.css';
import { SkipBackwardFill, SkipForwardFill, ChevronDoubleDown, ChevronDoubleRight } from 'react-bootstrap-icons';
import Helmet from 'react-helmet';
import VinilRadar from '../src/vinil-radar';
import Disk from '../src/disk';

export default function Home() {

  return (
    <div className="container">
      <Helmet>
        <title>Play - About Us</title>
        <meta name="description" content="TI stai chiedendo perchè ascoltare le tue emozioni? Scopri di più su di noi ed il nostro progetto" />
      </Helmet>
        <Container className="text-light" id="more">   
          <h1 className={style.title + " text-uppercase text-center mt-3"}>About us</h1> 
          <p className={style.text+' text-center my-3'}>
            Ormai è largamente riconosciuto e studiato il potere che esercita la musica sul nostro cervello. Basti pensare al film, videogiochi, pubblicità...
            Infatti la musica è in grado di generare emozioni in chi l'ascolta grazie al ritmo, agli strumenti esati, all'accostamento di tonalità e accordi. 
          </p> 

          <Row className={style.rowIframe + ' d-flex align-items-center text-center py-4'}>
            <Col md={6}>
              <iframe src="https://www.youtube.com/embed/IIiDBVW1Kv0?start=192" title="YouTube 'Lo squalo' clip" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" />
            </Col>
            <Col md={6}>
              <p className={style.text+' text-center'}>
                Ad esempio le composizioni caratterizzate da semitoni, con un ritmo crescente e accompagnate dall'uso di strumenti come viole lancinanti, contrabbassi potenti... 
                generano nell'ascoltatore una sensazione di ansia e tensione, come nella colonna sonora di "Lo squalo".
              </p>
            </Col>
            <Col md={6}>
              <p className={style.text+' text-center'}>
               Mentre un ritmo frizzante e nostalgico, accompagnato da stumenti dolci come viole, arpe, flauti e strumenti celtici, caratteristico del tema della contea del "Signore degli anelli", genera una senzazione di tranquillità, ma anche di calore e allegria, tipici dei paeselli rurali
              </p>
            </Col>
            <Col md={6}>
              <iframe src="https://www.youtube.com/embed/wasutmoo0cA" title="YouTube video player" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" />
            </Col>
          </Row> 

          <Row className='py-md-4 pt-4'>
            <Col xs={12}>
              <p className={style.text+' text-center py-5'}>
                Studi più recenti (come quello eseguito dall'Università di Berkeley) hanno inoltre dimostrato che le emozioni suscitate in persone 
                con la stessa cultura, provenienza... sono le pressochè le stesse. Di seguito sono riportati alcuni dati dello studio,
                (la versione completa la si può trovare <a href="https://www.ocf.berkeley.edu/~acowen/music.html#" className='text-light' target="_blank">qui</a>).
              </p>
            </Col>
            <Col xs={12}> <Disk/> </Col>
          </Row>      
        </Container>
        
        {/*<Container className="text-light text-center my-md-5 pt-md-5">
          <Row className="mt-md-5 pt-md-5">
            <Col>
              <h3 className="display-4 text-capitalize">Cervello e musica</h3>
              
              <p>Lorem ???</p>
              <Button variant="outline-light" className="btn-outline my-3" href="/idea">
                <ChevronDoubleRight/> <span className="mx-3">Scopri di più</span>
              </Button>
            </Col>
          </Row>     
        </Container>*/}
    </div>
  )
}