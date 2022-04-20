import Head from 'next/head'
import style from '../style/documentation.module.css';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-bootstrap-icons';

export default function Home() {



  return (
    <div className="container">
    <Head>
      <title>Play - Documentazione</title>
    </Head>

    <main>
      <Container className={style.c}>
      <h1 className='text-center display-2 mt-3'>Documentazione</h1>

      <section className='px-md-5'>
        <h2 className='text-center display-4 mt-3'>Abstract</h2> 
        <Row className="d-flex flex-column align-items-center">
          <Col md={8}>
            <p>
            Il sito, rivolto perlopiù ai giovani, ha lo scopo di offrire un servizio di streaming musicale diverso da quelli esistenti; ormai esistono molteplici servizi che consentono all'utente di scegliere tra milioni di brani (Spotify, YT-Music, Apple Music...). Invece l'innovazione di "Play" è quella di scegliere per l'utente, in base al suo stato emotivo.
            Le emozioni presenti sono 13, in particolare sono le stesse individuate da uno studio dell'Università di Berkeley dopo aver mappato le risposte emotive di oltre 2500 persone all'ascolto di molteplici brani.
            </p>
           
          </Col>
          <Col md={4}>
            <img src="./graph/music-streaming.png" className={style.graph} alt=""/>
          </Col>
        </Row>
      </section>
      <section className='px-md-5 pt-4'>
        <h2 className='text-center display-4 mt-3'>Project Management Plan</h2> 
        <Row className="d-flex flex-column align-items-center">
          <h3 className='text-center display-6 mt-2'>Benchmarking</h3>
            <Col md={8}>
            <h4 className='text-center h-3 mt-1'>Obiettivi</h4>
            <p>L'obiettivo principale del sito è quello di offrire streaming di brani (con licenza Creative Commons) per sfogare, interiorizzare, esorcizzare... le emozioni provate in un determinato momento, questo è possibile grazie al forte collegamento tra sentimenti e musica. Per ampliare l'esperienza s'ascolto offre anche collegamenti a playlist tematiche di spotify. 
            </p>
            </Col>
            <Col md={8}>
              <h4 className='text-center h-3 mt-1'>Target utente</h4>
              <p>Il target a cui è rivolto il sito è quello dei giovani (16-30 anni), ovvero la fascia di popolazione che utilizza maggiormente servizi simili a questo. Solitamente l'utilizzo è da sistemi mobile, anche per questo si è scelto di adottare un design responsive.
                Poichè il sito è scritto in italiano e comprende anche canzoni in italino è rivolta principalmente a utenti che conoscono bene la lingua.
              </p>
            </Col>
            <Col md={8}>
            <h4 className='text-center h-3 mt-1'>Competitor</h4>
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
       
        <h3 className='text-center display-6 mt-3'>Struttura e layout</h3>
        <h4 className='text-center h-3 mt-1'>Architettura del sito</h4>
        <h4 className='text-center h-3 mt-1'>Wireframe</h4>
        <h4 className='text-center h-3 mt-1'>Look and Feel</h4>

        <h3 className='text-center display-6 mt-2'>Linguaggi e strumenti</h3>
      </section>
      
      <h2 className='text-center display-4 mt-3'>Communication Strategy</h2> 
      </Container>
    </main>

  </div>
  )
}
