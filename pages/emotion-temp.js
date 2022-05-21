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

  console.log(props)

  const {title, linkImg, st, color, card, cit, Acit, idSpotify, player} = props;

  var inputTitle;

  function sendEmail(e) {
      e.preventDefault();
      emailjs.sendForm('service_qh75kq8', 'template_91ffk65', e.target, 'user_PQfmzyWoDL9kp4BkhLqDZ')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
      inputTitle.value="";
  }
    
  return ( 
    <div className="container">
    <div className={style.divHead + " imgCredit"}>
      <img src={"./emotion/" + title + ".webp"} className={style.imgHead} alt="" />
      <a href={linkImg} className={color + " credit"} target="_blank">created by master1305 - www.freepik.com</a>
    </div>
    <section className={style.sectionOne}>
        <h1 className={style.title}>{title}</h1>
        {player}

        <Link to="more" spy={true} smooth={true} offset={-100} duration={500} className={st + " btn btn-outline btn-outline-light m-5 my-4"}>
          <ChevronDoubleDown /><span className="mx-3">Ascolta di più</span>
        </Link>

        <form onSubmit={sendEmail} class={style.consigli + ' d-flex flex-column'}>
          <label for="message">Consigliaci altri brani:</label>
          <input type="hidden" id="name" name="name" value={title} />
          <input type="text" id="message" name="message" class="text-dark" ref={e => inputTitle = e} />
          <div className='text-md-end text-center'>
            <input type="submit" value="Invia" className={st + ' btn btn-sm border-light btn-outline text-light'} />
          </div>
        </form>
      </section>
    <section className={style.Spotify + ' text-center'}>
        <h2>Ascolta anche:</h2>
        <div className="d-flex flex-wrap justify-content-around">
          {card && card.map(element => <CardEmotion titolo={element} key={element} />)}
        </div>
      </section>
    <section>
        <Row className='mb-5 pb-3 text-center'>
          <p className='m-0'>{cit}</p>
          <p><em className='font-italic'>{Acit}</em></p>
        </Row>
        <Row id="more">
          <Col md={6} className='d-flex align-items-center'>
            <h2 className='display-2 px-4 w-100 text-md-start text-center mb-2'>Ascolta le tue emozioni anche su Spotify</h2>
          </Col>
          <Col md={6} className="text-center">
            <iframe className={style.plSpotify} src={"https://open.spotify.com/embed/playlist/" + idSpotify + "?utm_source=generator"}
              width="350" height="380" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>

          </Col>
        </Row>
    </section>
    </div>
  )
}