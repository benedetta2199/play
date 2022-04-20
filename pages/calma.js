import Head from 'next/head'
import style from '../style/page_emotion.module.css';
import { motion } from "framer-motion"
import { ChevronDoubleDown, PlayFill, SkipBackwardFill, SkipForwardFill } from 'react-bootstrap-icons';
import { useState } from 'react';
import { Button, Col, Row } from 'react-bootstrap';

export default function Home() {


    const playlistTitle = ["Into The Red",".Overdrive"]
    const playlistArtist = ["Trinity","Matrika"]
    const playlistMusic = ["./music/sfida/1.mp3","./music/sfida/2.mp3"]
    const playlistImg = ["./music/sfida/1.jpg","./music/sfida/2.jpg"]
    const Variants = {
        stop: {rotate: 0},
        start: {rotate: 360,transition: { duration: 8, repeat: Infinity, ease: "linear" }}
      };
      
    const [isStart, setIsStart] = useState(false);
    const [cont, setCont] = useState(0);

  return (
    <div className="container">
    <Head>
      <title>Play - Ascolta la calma</title>
    </Head>

    <main>
      <div className={style.divHead + " imgCredit"}>
        <img src="./emotion/calma.jpg" className={style.imgHead} alt=""/>
        <a href="https://www.freepik.com/free-photo/inspiration-asian-young-woman-s-portrait-dark-wall-neon-light-beautiful-female-model-with-headphones-concept-human-emotions-facial-expression-youth-sales-ad_15803823.htm" className="credit">created by master1305 - www.freepik.com</a>
      </div>
      <section className={style.sectionOne}>
        <h1 className={style.title}>Calma</h1>
        <div className={style.player + ' d-flex'}>
            <Row className='w-100'>
              <Col xs={5}>
                <div className={style.shadow}>
                  <motion.div className={style.disc} variants={Variants} animate={isStart? "start" : "stop"}>
                    <img src={playlistImg[cont]}/>
                  </motion.div>
                </div>
              </Col>
              <Col xs={7}>
                <h2 className="h4 mt-2 mx-1">{playlistTitle[cont]}</h2>
                <p className="mx-4">{playlistArtist[cont]}</p>
                <div className={style.btnPlayer + ' d-flex w-100 justify-content-center'}>
                  <SkipBackwardFill/>
                  <PlayFill onClick={() => setIsStart(!isStart)}/>
                  <SkipForwardFill/>
                </div>
              </Col>
            </Row>
          </div>
          
          <Button variant="outline-light" className={style.btn_ca + " btn-outline m-2 text-light"} href="#more">
            <ChevronDoubleDown/><span className="mx-3">Ascolta di più</span>
          </Button>
        </section>

        <section className={style.Spotify}  id="more">
            <Row className='my-5 pb-3 text-center'>
                <p className='m-0'>Procedi con calma tra il frastuono e la fretta, e ricorda quale pace possa esservi nel silenzio.</p>
                <p><i>Anonimo</i></p>
            </Row>
            <Row>
                <Col md={6} className='d-flex align-items-center'>
                    <h2 className='display-2 px-4'>Ascolta le tue emozioni anche su Spotify</h2>
                </Col>
                <Col md={6} className="text-center">
                  <iframe className={style.plSpotify}  src="https://open.spotify.com/embed/playlist/1SFp8Q4Vltls4fsncw0XEh?utm_source=generator" id="playlistSpot"
                  height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
        
                </Col>
            </Row>
        </section>
        
    </main>

  </div>
  )
}
