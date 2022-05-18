import Head from 'next/head'
import style from '../style/page_emotion.module.css';
import { motion, useAnimation } from "framer-motion"
import { PauseFill, PlayFill, SkipBackwardFill, SkipForwardFill } from 'react-bootstrap-icons';
import { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import useSound from 'use-sound';

export default function Emotion(props) {

  const {title, t, a, img} = props;

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
      default: tracks=[]; console.log("ATTENZIONE:"+title);break;
    }

    console.log(title + " - " + tracks.length);

  const controls = useAnimation();
  const Variants = {
      stop: {rotate: 0},
      start: {rotate: 360,transition: { duration: 6, repeat: Infinity, ease: "linear" }}
    };
    
    const [isStart, setIsStart] = useState(false);
    const lenght = tracks.length;
    
    const [cont, setCont] = useState(0);  
    
    const [play, {stop,pause}] = tracks && tracks[cont];  

    const [char, setButton] = useState(<PlayFill/>);
  
  return ( 
    <div classtitle={style.player + ' d-flex'}>
            <Row classtitle='w-100'>
              <Col xs={5}>
                <div classtitle={style.shadow}>
                  <motion.div classtitle={style.disc} animate={controls} variants={Variants}>
                    <img src={img && img[cont]} alt=''/>
                  </motion.div>
                </div>
              </Col>
              <Col xs={7}>
                <h2 classtitle="h4 mt-md-3 mt-4 mx-2">{t && t[cont]}</h2>
                <p classtitle="mx-4">{a && a[cont]}</p>
                <div classtitle={style.btnPlayer + ' d-flex w-100 justify-content-center'}>
                  <SkipBackwardFill onClick={()=>{setCont((cont+lenght-1)%length); stop(); setIsStart(false); controls.start("stop"); setButton(<PlayFill/>)}}/>
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
   )
}