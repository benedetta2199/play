import Head from 'next/head'
import style from '../style/card.module.css';
import { motion } from "framer-motion"
import { ChevronDoubleDown, PlayFill, SkipBackwardFill, SkipForwardFill } from 'react-bootstrap-icons';
import { useState } from 'react';
import { Button, Col, Row } from 'react-bootstrap';

export default function CardEmotion(props) {

  const {titolo} = props;
  var descrizione="";
  var st, stCard, stGlow;

  switch(titolo){
    case "ansia":
    descrizione="Bloccato dall'ansia? Respira profondamente e rilascia lo stress!";
    st = " btn_an"; stCard = style.cardAnsia; stGlow = style.gAnsia; break;
    case "bellezza":
    descrizione="Vedi tutto grigio? Lasciati trasportare da un meraviglioso e colorato mondo di note!";
    st = " btn_be"; stCard = style.cardBellezza; stGlow = style.gBellezza; break;
    case "calma":
    descrizione="Serve una pausa? Rilassati e abbandonati a un paradiso di pace e relax.";
    st = " btn_ca"; stCard = style.cardCalma; stGlow = style.gCalma; break;
    case "divertimento":
    descrizione="Rendi fantastico ogni momento. Colonna sonora che accompagna i tuoi attimi di liberà.";
    st = " btn_dv"; stCard = style.cardDivertimento; stGlow = style.gDivertimento; break;        
    case "energia":
    descrizione="Ti serve la carica per superare la giornata? Fai il pieno di energia e musica!";
    st = " btn_en"; stCard = style.cardEnergia; stGlow = style.gEnergia; break;    
    case "fastidio":
    descrizione="Vorresti soltanto urlare? Sfogati, prendi a pugni il mondo… ma fallo ritmo!";
    st = " btn_fs"; stCard = style.cardFastidio; stGlow = style.gFastidio; break;
    case "gioia":
    descrizione="Illumina la tua giornata! Musica per sorridere, e ritrovare il buon umore.";
    st = " btn_gi"; stCard = style.cardGioia; stGlow = style.gGioia; break;
    case "passione":
    descrizione="";
    st = " btn_pass"; stCard = style.cardPassione; stGlow = style.gPassione; break;
    case "paura":
    descrizione="Terrorizzato? Vivi la tensione e la suspence… combatti e supera le tue paure!";
    st = " btn_pr"; stCard = style.cardPaura; stGlow = style.gPaura; break;
    case "sfida":
    descrizione="Stanco e demoralizzato? Eccol la musica per darti la carica per affrontare tutte le sfide.";
    st = " btn_sf"; stCard = style.cardSfida; stGlow = style.gSfida; break;
    case "sogno":
    descrizione="Hai bisogno di volare via dalla realtà? Vivi un sogno a occhi aperti cullato dalla melodia.";
    st = " btn_sg"; stCard = style.cardSogno; stGlow = style.gSogno; break;
    case "trionfo":
    descrizione="Sentiti il re del mondo! Respira la potenza, la forza e l'inebriante trionfo!";  
    st = " btn_tri"; stCard = style.cardTrionfo;stGlow = style.gTrionfo; break;
    case "tristezza":
    descrizione="Lo sconforto ti assale? Lasciati cullare dalla musica e libera il tuo dolore.";  
    st = " btn_tr"; stCard = style.cardTristezza; stGlow = style.gTristezza; break;
  }
  return (
    <div className={`${style.glow} ${stGlow}`}>
      <div className={`${style.card} ${stCard}`}>
        <img src={"https://play-experiences.vercel.app/emotion/"+titolo+".jpg"} alt=""/>
        <h2 className="text-capitalized mt-2 mb-0 h4">{titolo}</h2>
        <p>{descrizione}</p>
        <Button className={style.btPlay + st + " text-light rounded-circle"} href={"./"+titolo}><PlayFill/></Button>
      </div>
      </div>
  )
}
