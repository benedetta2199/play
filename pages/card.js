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
      descrizione="Stato di apprensione, agitazione, dovuto a timore, incertezza o attesa di qualcosa. Può riguardare specifici eventi oppure non averne alcuno di riconoscibile.";
      st = "btn_an"; stCard = style.cardAnsia; stGlow = style.gAnsia; break;
    case "bellezza":
      descrizione="Sentimento vivo di ammirazione, nel vedere, udire, conoscere una cosa straordinaria. Suscita profonda ammirazione per il suo pregio, la sua straordinaria bellezza, importanza o rarità: ";
      st = "btn_be"; stCard = style.cardBellezza; stGlow = style.gBellezza; break;
    case "calma":
      descrizione="Stato di pace, tranquillità, distensione. Caratterizzata da assenza di frenesia e preoccupazioni e da uno stato di lucidità mentale, controllo dei nervi.";
      st = "btn_ca"; stCard = style.cardCalma; stGlow = style.gCalma; break;
    case "divertimento":
      descrizione="Stato di allontanamento delle precauzioni e leggerezza d'animo, solitamente dovuto ad attività o compagnia piacevoli. Permette distoglie l'attenzione dalle fatiche e dalle attività più serie.";
      st = "btn_dv"; stCard = style.cardDivertimento; stGlow = style.gDivertimento; break;        
    case "energia":
      descrizione="";
      st = "btn_en"; stCard = style.cardEnergia; stGlow = style.gEnergia; break;    
    case "fastidio":
      descrizione="";
      st = "btn_fs"; stCard = style.cardFastidio; stGlow = style.gFastidio; break;
    case "gioia":
      descrizione="";
      st = "btn_gi"; stCard = style.cardGioia; stGlow = style.gGioia; break;
    case "passione":
      descrizione="";
      st = "btn_pass"; stCard = style.cardPassione; stGlow = style.gPassione; break;
    case "paura":
      descrizione="";
      st = "btn_pr"; stCard = style.cardPaura; stGlow = style.gPaura; break;
    case "sfida":
      descrizione="";
      st = "btn_sf"; stCard = style.cardSfida; stGlow = style.gSfida; break;
    case "sogno":
      descrizione="";
      st = "btn_sg"; stCard = style.cardSogno; stGlow = style.gSogno; break;
    case "trionfo":
        descrizione="Stato emotivo di clamore e potenza accompagnato da entusiasmo ed euforia, spesso dovuto a una splendida vittoria o al raggiungimento di un obiettivo.";
        st = "btn_tri"; stCard = style.cardTrionfo;stGlow = style.gTrionfo; break;
    case "tristezza":
        descrizione="Condizione, visione, fatto che affligge, e che ispira sentimenti dolorosi, è uno stato riconducibile a un particolare dolore o a una diffusa e cupa malinconia.";
        st = "btn_tr"; stCard = style.cardTristezza; stGlow = style.gTrinstezza; break;
  }
  return (
    <div className={`${style.glow} ${stGlow}`}>
      <div className={`${style.card} ${stCard}`}>
        <img src={"https://play-experiences.vercel.app/emotion/"+titolo+".jpg"} alt=""/>
        <h2 className="text-capitalized mb-1">{titolo}</h2>
        <p>{descrizione}</p>
        <Button class={st + " text-light"} href={"./"+titolo}>Ascolta</Button>
      </div>
      </div>
  )
}
