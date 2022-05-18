import Head from 'next/head'
import style from '../style/page_emotion.module.css';
import { motion, useAnimation } from "framer-motion"
import { ChevronDoubleDown, PauseFill, PlayFill, SkipBackwardFill, SkipForwardFill } from 'react-bootstrap-icons';
import { useState } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import CardEmotion from '../src/card';
import useSound from 'use-sound';
import Helmet from 'react-helmet';
import { Link } from 'react-scroll/modules';
import emailjs from 'emailjs-com'

export default function Emotion(props) {

  /*var tracks=[];
  switch(titolo){
    case "ansia":tracks=[useSound('./music/'+name+'/1.mp3'),useSound('./music/'+name+'/2.mp3'),useSound('./music/'+name+'/3.mp3')]; break;
    case "bellezza":tracks=[useSound('./music/'+name+'/1.mp3'),useSound('./music/'+name+'/2.mp3'),useSound('./music/'+name+'/3.mp3')]break;
    case "calma":tracks=[useSound('./music/'+name+'/1.mp3'),useSound('./music/'+name+'/2.mp3'),useSound('./music/'+name+'/3.mp3')] break;
    case "divertimento":tracks=[useSound('./music/'+name+'/1.mp3'),useSound('./music/'+name+'/2.mp3'),useSound('./music/'+name+'/3.mp3')]break;        
    case "energia":tracks=[useSound('./music/'+name+'/1.mp3'),useSound('./music/'+name+'/2.mp3'),useSound('./music/'+name+'/3.mp3')]break;    
    case "fastidio":tracks=[useSound('./music/'+name+'/1.mp3'),useSound('./music/'+name+'/2.mp3'),useSound('./music/'+name+'/3.mp3')]break;
    case "gioia":tracks=[useSound('./music/'+name+'/1.mp3'),useSound('./music/'+name+'/2.mp3'),useSound('./music/'+name+'/3.mp3')]break;
    case "passione":break;
    case "paura":break;
    case "sfida":break;
    case "sogno": break;
    case "trionfo":break;
    case "tristezza": break;
  }*/

  const {title, linkImg, st, color, card, cit, Acit, idSpotify, t, a, trak, img, n} = props;
  var inputTitle;

  const controls = useAnimation();
  const traks = [];
  for(var i=0; i<n; i++){
    traks.push(useSound('./music/'+title+'/'+(i+1)+'.mp3'))
  }
  const titles=t;
  const artists=a;
  const imgs=img;
  const Variants = {
      stop: {rotate: 0},
      start: {rotate: 360,transition: { duration: 6, repeat: Infinity, ease: "linear" }}
    };
    
    const [isStart, setIsStart] = useState(false);
    const lenght = n;
    console.log(lenght)
    
    const [cont, setCont] = useState(0);  
    
  console.log(trak);
    const [play, {stop,pause}] = traks ? traks[cont] : useSound('./music/'+titles[cont]+'/1.mp3');  

    const [char, setButton] = useState(<PlayFill/>);

    function sendEmail(e) {
      e.preventDefault();
      emailjs.sendForm('service_qh75kq8', 'template_91ffk65', e.target, 'user_PQfmzyWoDL9kp4BkhLqDZ')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
      inputTitle.value=""
    }
    
  return (
    <div className="container">

      <div className={style.divHead + " imgCredit"}>
        <img src={"./emotion/"+title+".jpg"} className={style.imgHead} alt=""/>
        <a href={linkImg} className={color + " credit"} target="_blank">created by master1305 - www.freepik.com</a>
      </div>
      <section className={style.sectionOne}>
        <h1 className={style.title}>{title}</h1>
        <div className={style.player + ' d-flex'}>
            <Row className='w-100'>
              <Col xs={5}>
                <div className={style.shadow}>
                  <motion.div className={style.disc} animate={controls} variants={Variants}>
                    {/*imgs && imgs[cont]} alt={"immagine profilo di " + artists[cont]}*/}
                    <img src='/logo.png'/>
                  </motion.div>
                </div>
              </Col>
              <Col xs={7}>
                <h2 className="h4 mt-md-3 mt-4 mx-2">{/*titles && titles[cont]*/}</h2>
                <p className="mx-4">{/*artists && artists[cont]*/}</p>
                <div className={style.btnPlayer + ' d-flex w-100 justify-content-center'}>
                  <SkipBackwardFill onClick={()=>{setCont((cont+lenght-1)%lenght); stop(); setIsStart(false); controls.start("stop"); setButton(<PlayFill/>)}}/>
                  <a className='m-0 p-0'
                    onClick={()=>{setIsStart(!isStart);
                                  if(isStart){pause(); controls.stop(); setButton(<PlayFill/>);}
                                  else {play(); controls.start("start"); setButton(<PauseFill/>)}}}>
                    {char}
                  </a>
                  <SkipForwardFill onClick={()=>{setCont((cont+1)%lenght); stop(); setIsStart(false); controls.start("stop"); setButton(<PlayFill/>)}}/>
                </div>
              </Col>
            </Row>        
        </div>
          
        <Link to="more" spy={true}  smooth={true} offset={-100} duration={500} className={st+" btn btn-outline btn-outline-light m-5 my-4"}>
          <ChevronDoubleDown/><span className="mx-3">Ascolta di più</span>
        </Link>

          <form onSubmit={sendEmail} class={style.consigli + ' d-flex flex-column'}>
            <label for="message">Consigliaci altri brani:</label>
            <input type="hidden" name="title" id="title" value={title}/>
            <input type="text" name="message" id="message" class="text-dark" ref={e => inputTitle = e}/>
            <div className='text-md-end text-center'>
              <input type="submit" value="Invia" className={st+' btn btn-sm border-light btn-outline text-light'}/>
            </div>
          </form>
        </section>
        
        {/*<section className={style.Spotify + ' text-center'}>
          <h2>Ascolta anche:</h2>
          <div className="d-flex flex-wrap justify-content-around">
            {card && card.map (element => <CardEmotion titolo={element} key={element}/>)}
          </div>
        </section>*/}

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