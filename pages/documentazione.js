import Head from 'next/head'
import style from '../style/documentation.module.css';
import { Button, Col, Container, Dropdown, Row } from 'react-bootstrap';
import { Link } from 'react-scroll/modules';

export default function Home() {



  return (
    <div className="container mb-2">
    <Head>
      <title>Play - Documentazione</title>
    </Head>

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
          <Dropdown.Item>
            <Link to="21" spy={true} smooth={true} offset={0} duration={500}>Obiettivi comunicativi</Link>
          </Dropdown.Item>
          <Dropdown.Item>
            <Link to="22" spy={true} smooth={true} offset={0} duration={500}>Target</Link>
          </Dropdown.Item>
          <Dropdown.Item>
            <Link to="23" spy={true} smooth={true} offset={0} duration={500}>Promozione</Link>
          </Dropdown.Item>
          <Dropdown.Item>
            <Link to="24" spy={true} smooth={true} offset={0} duration={500}>Valutazione dei risultati</Link>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      </div>

      <section className='px-md-5'>
        <h2 className='text-center display-4 mt-4'>Abstract</h2> 
        <Row className="d-flex flex-column align-items-center">
          <Col md={9}>
            <p>
            Il sito, rivolto in modo particolare ai giovani, è una libreria musicale eclettica, organizzata attraverso l'emozione principale che scaturisce da ogni brano, per offrire un servizio di streaming musicale diverso da quelli esistenti. 
            Infatti non sarà possibile scegliere uno specifico brano tra milioni ma, in base all'umore dell'utente, saranno proposti brani di diversi autori e diverse epoche che esprimano quello stato emotivo.
            Le emozioni rappresentate sono 13, le stesse individuate dall'Università di Berkeley dopo aver mappato le risposte emotive di oltre 2500 persone all'ascolto di molteplici brani.
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
              <a href='https://www.ocf.berkeley.edu/~acowen/music.html#modal' className='text-center text-light h5' target="_blank">  Mappa audio interattiva</a>
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

              <a href='https://open.spotify.com/genre/mood-playlists[1]' className='text-center text-light h5' target="_blank">Spotify Mood</a>
              <p className='mb-0'>Essendo Spotify una delle piattaforme per lo streaming musicale più diffuse, ho deciso di analizzarlo come secondo competitor.
              In particolare prendendo in considerazione la sezione Mood, più simile come target e finalità a quella del sito che desidero creare: 
              </p>
              <Row>
                <Col xs={6} className='d-flex flex-column text-center'>
                  <strong>Pro</strong>
                  <small>Ha molte tipologie di playlist, tutte diversificate</small>
                  <small>C'è una descrizione per rendere più chiara la tipologia della playlist</small>
                  <small>Interazioni semplici e intuitive</small>
                  <small>Stile minimal, con colori brillanti e vivaci su una base neutra</small>
                </Col>
                <Col xs={6} className='d-flex flex-column text-center'>
                  <strong>Contro</strong>
                  <small>Non si ha una visione globale di tutte le playlist</small>
                  <small>Non si possono dare consigli sulle playlist</small>
                  <small>Skip limitati e pubblicità nella versione gratuita</small>
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
                    Per quanto riguarda i colori ho optato per 2 colori neutri per la struttura del sito e 2 colori (uno principale e il suo complementare) che caratterizzano ogni emozione, per meglio distinguerle.
                    Per rendere il design pulito e minimale, ma allo stesso tempo non banale e accattivante. 
                  </p>
                  <img src="./graph/palette.png" className={'w-75'} alt=""/>
                </Col>
    
                <Col md={6} xs={12}>
                  <p className='text-center h5'>La Tipografia</p>
                  <p>
                    I font, importanti da Google font, sono San Serif, per migliorare la qualità della lettura (poichè i paragrafi sono brevi,) e con uno spessore ridotto per dare l'idea di ordine e pulizia.
                    <br/>
                    In particolare si è scelto 'Julius Sans One' per i titoli, inquanto costituito da caratteri in maiuscole, mentre 'Prompt' dallo stile più classico per il testo. 
                    Le dimensioni e il contrasto dei caratteri sono tali da garantire la facilità della lettura e l'accessibilità.
                  </p>
                  <div className='text-center'>
                      <p className={style.julius+' h3 text-center'}>Julius Sans One</p>
                      <p className={style.prompt+' h3 text-center'}>Prompt Extra Light</p>
                    </div>
                </Col>

                
                <Col xs={12} className='mt-1'>
                <p className='text-center h5 mt-2'>Le immagini</p>
                <p>
                  Le immagini sono usate sopratutto a scopo estetico e per catturare l'attenzione dell'utente (motivo per il quale occupano la maggior parte della pagina).
                  Sono state prese dal sito <a href='https://www.freepik.com/home' className='text-light'>freepik</a> (licenza Creative Commonse) e modificate a seconda delle esigenze.
                  Passando il mouse su ogni immagine appare il link alla relativa risorsa sul sito e l'autore.
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
              Inoltre sono stati integrati diversi pacchetti, anchessi scritti in JavaScript, elencati di seguito. <br/>
              Come Strumenti ho utilizzato: Visual Studio Code (come IDE), GoogleFont (per la scelta dei font), freepik e photoshop (per le immagini), figma (per la realizzazione dei wireframe), github e vercel (per la pubblicazione del sito).
              Inoltre, sono state collegate le Analytics Google per monitorare il traffico del sito. 
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
              <li>emailjs-com v.3.2.0"</li>
            </ul>
          </Col>
        </Row>
      </section>
      
      <section>
        <h2 className='text-center display-4 mt-4 pt-md-4'>Communication Strategy</h2> 
        <h3 className='text-center display-6 mt-2' id="21">Obiettivi comunicativi</h3>
        <Row className="d-flex flex-column align-items-center">
          <Col md={9}>
            <p>
              Il sito è basato sull'ideologia 'less is more' motivo per il quale i contenuti e gli elemneti sono esculisvamente quelli essenziali, 
              questo è possibile perchè il sito non non ha uno scopo divulgativo, questo gli permette anche di essere visualizzato da una qualunque sezione
              senza rovinare l'esperienza utente, inquanto ogni parte è indipendente dalle altre. 
              Il sito si pone come obiettivo quello di offrire uno streaming musicale diverso dal solito, permettendo così all'utente di conosce brani che normalmente non ascolterebbe (promuovendo la conoscenza musicale) e provando a migliorare l'umore dell'utente grazie all'influsso che la musica ha sul nostro cervello.
            </p>
            <p>
              Per distinguermi dai competitor e fidelizzare l'utente ho deciso di dare particolare importanza a tutti quegli aspetti che attirano l'attenzione dell'utente: gli elementi grafici, colori contrastati e brillanti, elementi di gamification (come la tastiera del pianoforte dell'home page che oltre a essere un menù di navigazione, permette di suonare i semitoni). 
              Per rendere intuitiva l'interazione con questi elementi ho scelto una resa grafica che assomigliasse a degli oggetti di uso comune, per migliorare l'affordance (la qualità che permette all'utente di riuscire a comprenderne il funzionamento). 
              Sicuramente un limite riscontrato è stato quello del limitato numero di brani musicali (per il copiright), risolvibile ampliando in futuro il catalogo (magari collaborando anche con nuovi artisti poco conosciuti).
            </p>
          </Col>
        </Row>
        
        <h3 className='text-center display-6 mt-2' id='22'>Target</h3>
        <Row className="d-flex flex-column align-items-center">
          <Col md={9}>
            <p>Il target preso in considerazione è quello dei ragazzi (15-25 anni) italiani (inquanto il sito è disponibile in questa lingua), abituati a servizi simili e sempre curiosi di provare esperienze nuove. 
              Ma, essendo la struttura del sito intuitiva e accattivante, si adatta bene a un target utente più ampio.
            </p>
          </Col>
        </Row>
        
        <h3 className='text-center display-6 mt-2' id="23">Promozione</h3>
        <Row className="d-flex flex-column align-items-center">
          <Col md={9}>
            <p>
              Intendo promuovere il sito prevalentemente online, tramite social (Instagram essendo il social più utilizzato dal target scelto) e tramite passaparola.
            </p>
          </Col>
        </Row>
        
        <h3 className='text-center display-6 mt-2' id="24">Valutazione dei risultati</h3><Row className="d-flex flex-column align-items-center">
          <p className='text-center'>Dati aggiornati a 26/05/2022 alle 9.00</p>
          <Col md={9}>
            <h4 className='text-center mt-1'>50 visite al sito da utenti unici</h4>
            <Row className="d-flex align-items-center">
              <Col md={4}>
                <p>
                  Ritengo che l’obiettivo comunicativo sia stato pienamente raggiunto, infatti, nonostante il sito sia online da appena una settimana,
                  ha contato 129 visualizzazioni da utenti unici, superando ampiamente i 50 dell'obbiettivo. <br/>
                  Inoltre si può vedere come le previsioni del target (popolazione italiana) e dei dispositivi (mobile) sia stata rispettata.
                </p>
              </Col>          
              <Col md={8}><img src='./graph/analytics.png' className='w-100 border' alt="google analytics delle visualizzazioni dell'utente"/></Col>
            </Row>
            <h4 className='text-center mt-4'>20 like a un post del profilo instagram</h4>          
            <Row className="d-flex align-items-center">
              <Col md={7}><img src='./graph/post.PNG' className='w-100' alt="Insights dei like dei post dell'account instagram"/></Col>
              <Col md={5} className='text-center'>
                <p>
                  Essendo instagram il mezzo scelto per la promozione, i post sono creati per invogliare l'utente a 
                  guardare il sito web, più che per raccogliere like, motivo per il quale l'obiettivo riguardo al numero dei like non è particolarmente alto.<br/>
                </p>
                <a class='text-light mt-2' href='https://www.instagram.com/p/CdEWHSTj7E1/?utm_source=ig_web_copy_link'>Post</a>
              </Col>
              </Row>
            <h4 className='text-center mt-4'>Raggiungere almeno 100 account su instagram</h4>
            <Row className="d-flex align-items-center">
              <Col md={5}>
                <p>
                  Invece ho ritenuto più rilevante fissare un obiettivo inerente alla copertura dell'account e quanti profili riusciva a raggiungere.
                  Per vedere a quanti utenti riuscisse ad arrivare la promozione del sito.
                </p>
              </Col>
              <Col md={7} className='text-end'><img src='./graph/impression.png' className='w-100 px-4' alt="Insights della copertura dell'account instagram"/></Col>
              </Row>
            <h4 className='text-center mt-4'>Avere 20 visualizzazione al sito da instagram</h4>
            <Row className="d-flex align-items-center">
            <Col md={8} className='pr-5'><img src='./graph/social.png' className='w-100 mr-5 pr-5' alt="Google analytics sui canali d'indirizzamento"/></Col>
              <Col md={4}>
                <p>
                  Infine ho ritenuto rilevante fissare un obiettivo per monitorare quante persone visualizzassero il sito tramite i link inseriti sui
                  social (instagram in questo caso). Per capire se effetivamente fosse un buon canale di promozione.
                </p>
              </Col>
              </Row>
            <h4 className='text-center mt-5'>Produzione grafica - Brochure</h4>
          </Col>
        </Row>
        <Row className="d-flex align-items-center">
          <Col md={6}><img src='./graph/br1.png' className='w-100 border' alt="fronte brochure pubblicitaria di Play"/></Col>          
          <Col md={6}><img src='./graph/br2.png' className='w-100 border' alt="retro brochure pubblicitaria di Play"/></Col>
        </Row>

      </section>
      </Container>

  </div>
  )
}
