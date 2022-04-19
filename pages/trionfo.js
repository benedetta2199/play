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
        start: {rotate: 360,transition: { duration: 10, repeat: Infinity, ease: "linear" }}
      };
      
      const [isStart, setIsStart] = useState(false);
      const [cont, setCont] = useState(0);

  return (
    <div className="container">
    <Head>
      <title>Play - Ascolta il trionfo</title>
    </Head>

    <main>
        <section>
            <h1 className={style.title}>Trionfo</h1>
            <div className={style.divHead + " imgCredit"}>
                <img src="./emotion/trionfo.jpg" className={style.imgHead} alt=""/>
                <a href="https://www.freepik.com/free-photo/smiling-caucasian-young-man-s-portrait-handsome-male-model-casual-style_15560194.htm" className="credit">created by master1305 - www.freepik.com</a>
            </div>
            <div className={style.player + ' d-flex'}>
                <Row className='w-100'>
                    <Col sm={5}>
                        <div className={style.shadow}>
                        <motion.div className={style.disc} variants={Variants} animate={isStart? "start" : "stop"}>
                            <img src={playlistImg[cont]}/>
                        </motion.div>
                        </div>
                    </Col>
                    <Col sm={7}>
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
            <Button variant="outline-light" className={style.btn_tri + " btn-outline m-2 text-light"} href="#more">
                <ChevronDoubleDown/><span className="mx-3">Ascolta di più</span>
            </Button>
        </section>

        <section className={style.Spotify}  id="more">
            <Row className='my-5 pb-3 text-center'>
                <p className='m-0'>Il coraggio, che è il nostro sesto senso, ci fa scoprire la strada più breve per il trionfo.</p>
                <p><i>Khalil Gibran</i></p>
            </Row>
            <Row>
                <Col md={6} className='d-flex align-items-center'>
                    <h2 className='display-2 px-4'>Ascolta le tue emozioni anche su Spotify</h2>
                </Col>
                <Col md={6} className="text-center">
                    <iframe className={style.plSpotify} src="https://open.spotify.com/embed/playlist/5ecBzpbT8P9hTphGuTo8MV?utm_source=generator"
                    width="350" height="380" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
                
                </Col>
            </Row>
        </section>
    </main>

  </div>
  )
}
