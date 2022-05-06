import Head from 'next/head'
import style from '../style/page_emotion.module.css';
import { motion } from "framer-motion"
import { ChevronDoubleDown, PlayFill, SkipBackwardFill, SkipForwardFill } from 'react-bootstrap-icons';
import { useState } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import CardEmotion from './card';
import useSound from 'use-sound';
import Helmet from 'react-helmet';
import { Link } from 'react-scroll/modules';

export default function Emotion(props) {

  var {title, linkImg, player, st, color, card, cit, Acit, idSpotify} = props;

  const titles=['Into The Red', 'Overdrive'];
  const artists=['Trinity', 'Matrika'];
  const tracks=[useSound('./music/sfida/1.mp3'),useSound('./music/sfida/2.mp3')];
  const imgs=["./music/sfida/1.jpg","./music/sfida/2.jpg"];
  const Variants = {
      stop: {rotate: 0},
      start: {rotate: 360,transition: { duration: 8, repeat: Infinity, ease: "linear" }}
    };
    
    const [isStart, setIsStart] = useState(false);
    const lenght = 2;
    
    const [cont, setCont] = useState(0);  
    
    const [play, {stop}] = tracks[cont];  
    
  return (
    <div className="container">
      <Helmet>
        <title>Play - {title}</title>
        <meta name="description" content="" />
      </Helmet>

      <div className={style.divHead + " imgCredit"}>
        <img src={"./emotion/"+title+".jpg"} className={style.imgHead} alt=""/>
        <a href={linkImg} className={color + " credit"} target="_blank">created by master1305 - www.freepik.com</a>
      </div>
      <section className={style.sectionOne}>
        <h1 className={style.title}>{title}</h1>
        {player}
        <div className={style.player + ' d-flex'}>
            <Row className='w-100'>
              <Col xs={5}>
                <div className={style.shadow}>
                  <motion.div className={style.disc} variants={Variants} animate={isStart? "start" : "stop"}>
                    <img src={imgs[cont]} alt=""/>
                  </motion.div>
                </div>
              </Col>
              <Col xs={7}>
                <h2 className="h4 mt-md-3 mt-4 mx-2">{titles[cont]}</h2>
                <p className="mx-4">{artists[cont]}</p>
                <div className={style.btnPlayer + ' d-flex w-100 justify-content-center'}>
                  <SkipBackwardFill onClick={()=>{setCont((cont-1)%lenght); stop(); setIsStart(false);}}/>
                  <PlayFill onClick={()=>{
                    setIsStart(!isStart);
                    if(isStart){
                      stop();
                    } else {
                      play();
                    }}}/>
                  <SkipForwardFill onClick={()=>{setCont((cont+1)%lenght); stop(); setIsStart(false);}}/>
                </div>
              </Col>
            </Row>        
        </div>
          
        <Button variant="outline-light" className={st + " btn-outline m-2  text-light"}>
          <Link to="more" spy={true}  smooth={true} offset={-100} duration={500}>
          <ChevronDoubleDown/><span className="mx-3">Ascolta di più</span>
          </Link>
        </Button>
        </section>
        
        <section className={style.Spotify + ' text-center'}>
          <h2>Ascolta anche:</h2>
          <div className="d-flex flex-wrap justify-content-around">
            {card && card.map (element => <CardEmotion titolo={element} key={element}/>)}
          </div>
        </section>

        <section>
            <Row className='mb-5 pb-3 text-center'>
                <p className='m-0'>{cit}</p>
                <p><em className='font-italic'>{Acit}</em></p>
            </Row>
            <Row  id="more">
                <Col md={6} className='d-flex align-items-center'>
                    <h2 className='display-2 px-4'>Ascolta le tue emozioni anche su Spotify</h2>
                </Col>
                <Col md={6} className="text-center">
                  <iframe className={style.plSpotify}  src={"https://open.spotify.com/embed/playlist/"+idSpotify+"?utm_source=generator" }
                  width="350" height="380" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
        
                </Col>
            </Row>
        </section>
  </div>
  )
}