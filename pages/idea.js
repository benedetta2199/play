import Head from 'next/head'
import { Button, Col, Container, Row } from 'react-bootstrap';
import Piano from '../src/piano';
import style from '../style/idea.module.css';
import { SkipBackwardFill, SkipForwardFill, ChevronDoubleDown, ChevronDoubleRight } from 'react-bootstrap-icons';
import Helmet from 'react-helmet';
import VinilRadar from './vinil-radar';
import Disk from './disk';

export default function Home() {

  return (
    <div className="container">
      <Helmet>
        <title>Play - L'idea</title>
        <meta name="description" content="" />
      </Helmet>
        <Container className="text-light" id="more">   
          <h1 className={style.title + " text-uppercase text-center mt-3"}>Il potere della musica</h1> 
          <p className={style.text+' text-center my-3'}>
            Ormai è largamente riconosciuto e studiato il potere che esercita la musica sul nostro cervello. Basti pensare al film, videogiochi, pubblicità...
            Infatti la musica è in grado di generare emozioni in chi l'ascolta grazie al ritmo, agli strumenti esati, all'accostamento di tonalità e accordi. 
          </p> 

          <Row className='d-flex align-items-center text-center py-4'>
            <Col md={6}>
              <iframe width="80%" height="280px" src="https://www.youtube.com/embed/IIiDBVW1Kv0?start=192" title="YouTube 'Lo squalo' clip" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" />
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
              <iframe width="80%" height="280px" src="https://www.youtube.com/embed/wasutmoo0cA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" />
            </Col>
          </Row> 

          <Row className='py-4'>
            <Col xs={12}>
              <p className={style.text+' text-center py-5'}>
                Studi più recenti (come quello eseguito dall'Università di Berkeley) hanno inoltre dimostrato che le emozioni suscitate in persone 
                con la stessa cultura, provenienza... sono le pressochè le stesse. Di seguito sono riportati alcuni dati dello studio,
                (la versione completa la si può trovare <a href="https://www.ocf.berkeley.edu/~acowen/music.html#" className='text-light'>qui</a>).
              </p>
            </Col>
            <Col xs={12}> <Disk/> </Col>
          </Row>      
        </Container>
        {/*Ad esempio, si sa che gli intervalli tra le note sono responsabili di reazioni abbastanza riproducibili tra individui diversi: le composizioni per semitoni generano tensione (“Lo squalo”, appunto) mentre un intervallo di quinta (DO-SOL) è così perfetto e piacevole da risultare l'equivalente musicale di un cerchio nelle arti figurative. Gli strumenti che si usano sono un altro esempio molto semplice da comprendere: qualcuno alzi la mano se è capace di suscitare terrore suonando un'arpa o un oboe! Ci si può riuscire, certamente, ma se in un film o in un videogame dobbiamo evocare una sensazione di paura e angoscia, meglio andare su sintetizzatori, cori lirici, viole lancinanti, contrabbassi potenti e via dicendo... Insomma, sbizzarriamoci a elencare tutte le differenze tra questo video, con le colonne sonore dei più famosi film horror, e questo, con le colonne sonore dei film romantici. Le differenze sono evidenti anche a chi non ha nemmeno la passione per la musica.*/
/* */}

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