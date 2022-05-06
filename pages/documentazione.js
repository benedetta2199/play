import Head from 'next/head'
import style from '../style/documentation.module.css';
import { Button, Col, Container, Dropdown, Row } from 'react-bootstrap';
import { Link } from 'react-scroll/modules';

export default function Home() {



  return (
    <div className="container">
    <Head>
      <title>Play - Documentazione</title>
    </Head>

    <main>
      <Container className={style.c}>
      <h1 className='text-center display-2 mt-3'>Documentazione</h1>

      <div className={style.navbar+" d-flex justify-content-center align-items-center"}>
      <Dropdown className='px-2'>
        <Dropdown.Toggle variant="secondary">
        Project Management Plan
        </Dropdown.Toggle>

        <Dropdown.Menu variant="dark">
          <Dropdown.Item>
            <Link to="11" spy={true} smooth={true} offset={0} duration={500}>Benchmarking</Link>
          </Dropdown.Item>
          <Dropdown.Item>
            <Link to="12" spy={true} smooth={true} offset={0} duration={500}>Struttura e layout</Link>
          </Dropdown.Item>
          <Dropdown.Item>
            <Link to="13" spy={true} smooth={true} offset={0} duration={500}>Linguaggi e strumenti</Link>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <Dropdown className='px-2'>
        <Dropdown.Toggle variant="secondary">
        Communication Strategy
        </Dropdown.Toggle>

        <Dropdown.Menu variant="dark">
          <Dropdown.Item href="#/action-1" active>
            Action
          </Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item href="#/action-4">Separated link</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      </div>

      <section className='px-md-5'>
        <h2 className='text-center display-4 mt-4'>Abstract</h2> 
        <Row className="d-flex flex-column align-items-center">
          <Col md={9}>
            <p>
            Il sito, rivolto in modo particolare ai giovani, è una libreria musicale eclettica, organizzata attraverso l'emozione e i sentimenti che scaturiscono da ogni brano, per offrire un servizio di streaming musicale diverso da quelli esistenti che consentono all'utente di scegliere tra milioni di brani (Spotify, YT-Music, Apple Music...). L'innovazione di "Play" è quella di scegliere per l'utente, in base al suo stato emotivo.
            Le emozioni presenti sono 13, le stesse individuate dall'Università di Berkeley dopo aver mappato le risposte emotive di oltre 2500 persone all'ascolto di molteplici brani.
            </p>
           
          </Col>
          <Col md={4}>
            <img src="./graph/music-streaming.png" className={style.graph} alt=""/>
            <small>I servizi di streaming musicale più utilizzati e conosciuti</small>
          </Col>
        </Row>
      </section>
      <section className='px-md-5 pt-4'>
        <h2 className='text-center display-4 mt-4 pt-md-4'>Project Management Plan</h2> 
        
        <h3 className='text-center display-6 mt-2' id='11'>Benchmarking</h3>
        <Row className="d-flex flex-column align-items-center pb-md-3">
            <Col md={9}>
            <h4 className='text-center h3 mt-1'>Obiettivi</h4>
            <p>L'obiettivo principale del sito è quello di offrire streaming di brani (con licenza Creative Commons) per sfogare, interiorizzare, esorcizzare... le emozioni provate in un determinato momento, questo è possibile grazie al forte collegamento tra sentimenti e musica. Per ampliare l'esperienza s'ascolto offre anche collegamenti a playlist tematiche di spotify. 
            </p>
            </Col>
            <Col md={9}>
              <h4 className='text-center h3 mt-1'>Target utente</h4>
              <p>Il target a cui è rivolto il sito è quello dei giovani (16-30 anni), ovvero la fascia di popolazione che utilizza maggiormente servizi simili a questo. Solitamente l'utilizzo è da sistemi mobile, anche per questo si è scelto di adottare un design responsive.
                Poichè il sito è scritto in italiano e comprende anche canzoni in italino è rivolta principalmente a utenti che conoscono bene la lingua.
              </p>
            </Col>
            <Col md={9}>
            <h4 className='text-center h3 mt-1'>Competitor</h4>
            <div className='text-center'>
              <p className='m-0'>Di seguito illustrerò i competitor e gli aspetti che ho individuato da tenere e valorizzare "Pro" e invece quelli da migliorare o eliminare "Contro":</p>
              <a href='https://www.ocf.berkeley.edu/~acowen/music.html#modal' className='text-center text-light h5'>  Mappa audio interattiva</a>
              <p className='mb-0'>Nonostante non sia espressamente un sito, era doveroso citare come primo competitor il servizio che ha fornito l'idea al questo, il target e le finalità sono diverse, in quanto è utilizzato per offrire un panoramica e i dati della ricerca, rimane la identica la suddivisione musicale.
              </p>
              <Row className="mb-2">
                <Col xs={6} className='d-flex flex-column text-center'>
                  <strong>Pro</strong>
                  <small>Associazione di un colore e una lettera ad ogni genere</small>
                  <small>La possibilità di navigare immediatamente tra tutti i brani</small>
                  <small>L'esperienza utente non banale grazie alla "gamification"</small>
                  <small>Il design minimale nonostante il numero di elementi presenti</small>
                  <small>La facilità di utilizzo e apprendimento di esso</small>
                </Col>
                <Col xs={6} className='d-flex flex-column text-center'>
                  <strong>Contro</strong>
                  <small>La mancanza di titolo e autore nei brani</small>
                  <small>Il design scalabile che rende difficile utilizzo mobile </small>
                  <small>La difficoltà di scegliere uno specifico brano</small>
                  <small>I brani presenti solo in maniera incolpeta</small>
                  <small>Brani soprattutto melodici e non musicali</small>
                </Col>
              </Row>

              <a href='#' className='text-center text-light h5'>Sito Web XXX</a>
              <p className='mb-0'>xx
              </p>
              <Row>
                <Col xs={6} className='d-flex flex-column text-center'>
                  <strong>Pro</strong>
                  <small>Associazione di un colore e una lettera ad ogni genere</small>
                </Col>
                <Col xs={6} className='d-flex flex-column text-center'>
                  <strong>Contro</strong>
                  <small>La mancanza di titolo e autore nei brani</small>
                </Col>
              </Row>
            </div>
            </Col>
        </Row>
       
        <h3 className='text-center display-6 mt-3 pt-4' id='12'>Struttura e layout</h3>
        <div className='pb-md-3'>
          <h4 className='text-center h3 mt-1'>Architettura del sito</h4>
          <Row className="d-flex flex-column align-items-center">
            <Col md={7} xs={12} className='d-flex text-center'>
              <img src="./graph/navigatio-tree.png" className={'w-100'} alt=""/>
            </Col>
          </Row>
          <h4 className='text-center h3 mt-2'>Wireframe</h4>
          <Row className="d-flex flex-column align-items-center">
            <Col md={9} xs={12} className='text-center'>
              <p className='text-center h5 mt-2'>Versione mobile</p>
              <img src="./graph/mobile.png" className={style.wireframe+' w-100'} alt=""/>
            </Col>
            <Col md={10} xs={12} className='text-center'>
              <p className='text-center h5 mt-2'>Versione desktop</p>
              <img src="./graph/desktop.png" className={style.wireframe+' w-100'} alt=""/>
            </Col>
          </Row>
          <h4 className='text-center h3 mt-4'>Look and Feel</h4>

          <Row className="d-flex flex-column align-items-center">
            <Col md={9} xs={12} className='text-center'>
              <Row className="">
                <Col md={6} xs={12} className='text-center'>
                  <p className='text-center h5 mt-2'>I Colori</p>
                  <p>
                    Per quanto riguarda i colori ho optato per 2 colori neutri per la struttura del sito generali e 2 colori (uno principale e il suo complementare) che caratterizzano ogni emozione, per meglio distinguerla.
                    Questo garantisce un design pulito e minimale, ma allo stesso tempo non banale e accattivante. 
                  </p>
                  <img src="./graph/palette.png" className={'w-75'} alt=""/>
                </Col>
    
                <Col md={6} xs={12}>
                  <p className='text-center h5'>La Tipografia</p>
                  <p>
                    I font, importanti da Google font, sono San Serif, per migliorare la qualità della lettura (poichè i paragrafi sono brevi,) e con uno spessore ridotto per dare l'idea di ordine e pulizia.
                    <br/>
                    In particolare si è scelto 'Julius Sans One' per i titoli, inquanto costituito da caratteri in maiuscole, mentre 'Prompt' dallo stile più classico per il testo. 
                    Le dimensioni dei caratteri sono sempre superiori alla dimensione minima per garantire l'accessibilità.
                  </p>
                  <div className='text-center'>
                      <p className={style.julius+' h3 text-center'}>Julius Sans One</p>
                      <p className={style.prompt+' h3 text-center'}>Prompt Extra Light</p>
                    </div>
                </Col>

                
                <Col xs={12} className='mt-1'>
                <p className='text-center h5 mt-2'>Le immagini</p>
                <p>
                  Le immagini sono usate sopratutto a scopo estetico e per catturare l'attenzione dell'utente (motivo per il quale occupano tutta la pagina).
                  Le immagini con licenza Creative Commons sono state prese dal sito <a href='https://www.freepik.com/home' className='text-light'>freepik</a> e modificate a seconda delle esigenze,
                  passando con il mouse su ogni immagine appare il link alla relativa risorsa sul sito.
                </p>
                </Col>

                <Col xs={12} className='mt-1'>
                <p className='text-center h5 mt-2'>Effetti</p>
                <p>
                  Ho utilizzato alcuni effetti grafici per rendere interattivo e piacevole l’utilizzo del sito, come: il cambiamento di colore al passaggio del mouse su un link del menù di navigazione o sui bottoni.
                  E l'effetto "smooth scroll" per passare da una parte all'altra di una pagina.
                </p>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>

        <h3 className='text-center display-6 mt-2' id='13'>Linguaggi e strumenti</h3>
        <Row className="d-flex justify-content-center align-items-top">
          <Col md={6} xs={12}>
            <p>
              Il sito è costruito utilizzando come linguaggio HTML, CSS e JavaScript e sfruttando react (libreria open-source, front-end, basata su JavaScript).
              Inoltre sono stati integrati diversi pacchetti, anchessi scritti in JavaScript, elencati qui a lato. <br/>
              Come Strumenti ho utilizzato: Visual Studio Code (come IDE), GoogleFont (per la scelta dei font), freepik e photoshop (per le immagini), figma (per la realizzazione dei wireframe), github e vercel (per la pubblicazione del sito).
            {/**ANALITICS */}
            </p>
          </Col>
          <Col md={3} xs={12}>
            <ul>
              <li>react-bootstrap v.2.2.2</li>
              <li>react-bootstrap-icons v.1.8.1</li>
              <li>react-chartjs-2 v.4.1.0</li>
              <li>framer-motion v.6.2.8</li>
              <li>next v.12.1.0</li>
              <li>react-device-detect v.2.2.2</li>
              <li>react-scroll v.1.8.7</li>
              <li>use-sound v.4.0.1</li>
            </ul>
          </Col>
        </Row>
      </section>
      
      <section>
        <h2 className='text-center display-4 mt-4 pt-md-4'>Communication Strategy</h2> 
      </section>
      </Container>
    </main>

  </div>
  )
}
