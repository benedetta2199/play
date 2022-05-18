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

  const {title, linkImg, st, color, card, cit, Acit, idSpotify, t, a, trak, img, n} = props;
  console.log(title);


  var tracks=[];
    switch(title){
      case "ansia":tracks=[useSound('./music/'+title+'/1.mp3'),useSound('./music/'+title+'/2.mp3'),useSound('./music/'+title+'/3.mp3')]; break;
      case "bellezza":tracks=[useSound('./music/'+title+'/1.mp3'),useSound('./music/'+title+'/2.mp3'),useSound('./music/'+title+'/3.mp3')];break;
      case "calma":tracks=[useSound('./music/'+title+'/1.mp3'),useSound('./music/'+title+'/2.mp3'),useSound('./music/'+title+'/3.mp3')]; break;
      case "divertimento":tracks=[useSound('./music/'+title+'/1.mp3')];break;        
      case "energia":tracks=[useSound('./music/'+title+'/1.mp3'),useSound('./music/'+title+'/2.mp3')];break;    
      case "fastidio":tracks=[useSound('./music/'+title+'/1.mp3'),useSound('./music/'+title+'/2.mp3')];break;
      case "gioia":tracks=[useSound('./music/'+title+'/1.mp3')];break;
      case "passione":tracks=[useSound('./music/'+title+'/1.mp3'),useSound('./music/'+title+'/2.mp3'),useSound('./music/'+title+'/3.mp3'),useSound('./music/'+title+'/4.mp3')];break;
      case "paura":tracks=[useSound('./music/'+title+'/1.mp3'),useSound('./music/'+title+'/2.mp3'),useSound('./music/'+title+'/3.mp3')];break;
      case "sfida":tracks=[useSound('./music/'+title+'/1.mp3'),useSound('./music/'+title+'/2.mp3'),useSound('./music/'+title+'/3.mp3')];break;
      case "sogno":tracks=[useSound('./music/'+title+'/1.mp3'),useSound('./music/'+title+'/2.mp3'),useSound('./music/'+title+'/3.mp3')];break;
      case "trionfo":tracks=[useSound('./music/'+title+'/1.mp3'),useSound('./music/'+title+'/2.mp3')];break;
      case "tristezza":tracks=[useSound('./music/'+title+'/1.mp3'),useSound('./music/'+title+'/2.mp3')];break;
    }

  const controls = useAnimation();
  /*const tracks = trak;
  const track = new Array(n);
  for(var i=0; i<n; i++){
    track.push(useSound('./music/'+title+'/'+(i+1)+'.mp3'));
    console.log(i+1);
  }*/
  const titles=t;
  const artists=a;
  const imgs=img;
  const Variants = {
      stop: {rotate: 0},
      start: {rotate: 360,transition: { duration: 6, repeat: Infinity, ease: "linear" }}
    };
    
    const [isStart, setIsStart] = useState(false);
    const lenght = tracks.length;
    console.log(lenght);
    
    const [cont, setCont] = useState(0);  
    
    const [play, {stop,pause}] = tracks && tracks[cont];  

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
    <div classtitle="container">

      <div classtitle={style.divHead + " imgCredit"}>
        <img src={"./emotion/"+title+".jpg"} classtitle={style.imgHead} alt=""/>
        <a href={linkImg} classtitle={color + " credit"} target="_blank">created by master1305 - www.freepik.com</a>
      </div>
      <section classtitle={style.sectionOne}>
        <h1 classtitle={style.title}>{title}</h1>
        <div classtitle={style.player + ' d-flex'}>
            <Row classtitle='w-100'>
              <Col xs={5}>
                <div classtitle={style.shadow}>
                  <motion.div classtitle={style.disc} animate={controls} variants={Variants}>
                    {/*imgs && imgs[cont]} alt={"immagine profilo di " + artists[cont]}*/}
                    <img src='/logo.png'/>
                  </motion.div>
                </div>
              </Col>
              <Col xs={7}>
                <h2 classtitle="h4 mt-md-3 mt-4 mx-2">{/*titles && titles[cont]*/}</h2>
                <p classtitle="mx-4">{/*artists && artists[cont]*/}</p>
                <div classtitle={style.btnPlayer + ' d-flex w-100 justify-content-center'}>
                  <SkipBackwardFill onClick={()=>{setCont((cont+lenght-1)%lenght); stop(); setIsStart(false); controls.start("stop"); setButton(<PlayFill/>)}}/>
                  <a classtitle='m-0 p-0'
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
          
        <Link to="more" spy={true}  smooth={true} offset={-100} duration={500} classtitle={st+" btn btn-outline btn-outline-light m-5 my-4"}>
          <ChevronDoubleDown/><span classtitle="mx-3">Ascolta di più</span>
        </Link>

          <form onSubmit={sendEmail} class={style.consigli + ' d-flex flex-column'}>
            <label for="message">Consigliaci altri brani:</label>
            <input type="hidden" title="title" id="title" value={title}/>
            <input type="text" title="message" id="message" class="text-dark" ref={e => inputTitle = e}/>
            <div classtitle='text-md-end text-center'>
              <input type="submit" value="Invia" classtitle={st+' btn btn-sm border-light btn-outline text-light'}/>
            </div>
          </form>
        </section>
        
        {/*<section classtitle={style.Spotify + ' text-center'}>
          <h2>Ascolta anche:</h2>
          <div classtitle="d-flex flex-wrap justify-content-around">
            {card && card.map (element => <CardEmotion titolo={element} key={element}/>)}
          </div>
        </section>*/}

        <section>
            <Row classtitle='mb-5 pb-3 text-center'>
                <p classtitle='m-0'>{cit}</p>
                <p><em classtitle='font-italic'>{Acit}</em></p>
            </Row>
            <Row  id="more">
                <Col md={6} classtitle='d-flex align-items-center'>
                    <h2 classtitle='display-2 px-4'>Ascolta le tue emozioni anche su Spotify</h2>
                </Col>
                <Col md={6} classtitle="text-center">
                  <iframe classtitle={style.plSpotify}  src={"https://open.spotify.com/embed/playlist/"+idSpotify+"?utm_source=generator" }
                  width="350" height="380" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
        
                </Col>
            </Row>
        </section>
  </div>
  )
}