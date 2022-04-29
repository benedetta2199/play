import Head from 'next/head'
import { Button, Col, Container, Row } from 'react-bootstrap';
import Piano from '../src/piano';
import style from '../style/idea.module.css';
import { SkipBackwardFill, SkipForwardFill, ChevronDoubleDown, ChevronDoubleRight } from 'react-bootstrap-icons';
import Helmet from 'react-helmet';
import VinilRadar from './vinil-radar';
import Disk from './disk';

export default function Home() {

  const disk = [
    {dts:[31,25,5,26,9], dte:['Trionfo','Ansia','Bellezza','Energia','Sfida'], title:'Eye of Tyger', id:"2KH16WveTQWT6KOG9Rg6e2"},
    {dts:[24,16,22,20,18], dte:['Bellezza','Calma','Energia','Sogno','Trionfo'], title:'Bitter Sweet Symphony', id:"57iDDD9N9tTWe75x6qhStw"},
    {dts:[31,15,9,26,18], dte:['Ansia','Energia','Fastidio','Paura','Trionfo'], title:'The Rite of Spring', id:"5MSHxf0zVSajZknoxJC9Nj"},
    {dts:[34,19,10,17,18], dte:['Passione','Sogno','Bellezza','Calma','Divertimento'], title:'Human Nature', id:"35lAjvsvS9k9HHuP1fjDT8"},
    {dts:[31,28,23,11,9], dte:['Tristezza','Bellezza','Calma','Passione','Sogno'], title:'Summertime Sadness', id:"33CeM8NI7tfrNgciVOFMoo"},
    {dts:[27,12,15,17,23], dte:['Calma','Energia','Passione','Sogno','Bellezza'], title:"How Far I'll Go", id:"55dS7JjavLsf63BynwsbV5"},
    {dts:[34,30,13,8,14], dte:['Bellezza','Calma','Energia','Gioia','Sogno'], title:'Mykonos', id:"7H71gZwWs3xPWnHM30NDUp"},
    {dts:[46,6,9,20,14], dte:['Calma','Passione','Sogno','Tristezza','Bellezza'], title:'Paris', id:"15vzANxN8G9wWfwAJLLMCg"},
    {dts:[26,17,14,17,14], dte:['Gioia','Passione','Tristezza','Calma','Energia'], title:'The Scientist', id:"75JFxkI2RXiU7L9VXzMkle"},
    {dts:[33,6,21,8,31], dte:['Fastidio','Paura','Sfida','Ansia','Energia'], title:'Divide & Conquer', id:"3HD05YfZS6L8ZZD0Gl47Hq"},
    {dts:[42,22,10,8,14], dte:['Energia','Fastidio','Sfida','Trionfo','Ansia'], title:'Run the World', id:"1uXbwHHfgsXcUKfSZw5ZJ0"}
  ]

  const indexComb=[[1,4,7,2,5],[8,0,2,10,4,],[4,1,5,10,3],[4,1,6,7,0],[0,10,3,1,8],[1,0,6,2,5],[7,8,6,2,1],[6,1,0,9,3],[3,8,4,6,1],[10,6,2,5,9],[5,10,6,8,4]];
  const currentIndex=indexComb[parseInt(Math.random()*indexComb.length)];
  return (
    <div className="container">
      <Helmet>
        <title>Play - L'idea</title>
        <meta name="description" content="" />
      </Helmet>

        <Row>
          <Col md={6} xs={12}>
            <div className={style.imgHead + " imgCredit"}>
              <img className={style.img_girl + " w-100"} src="./time-line-glow.jpg" alt=""/>
              <a href="https://www.freepik.com/freepik" className="credit" target="_blank">created by freepik & kbza - www.freepik.com</a>
            </div>
          </Col>
          <Col md={6} xs={12}>
            <h1 className={style.title + " text-uppercase text-center w-100 mt-md-4 mt-2"}>
                <SkipBackwardFill className={style.titleCommand + " ml-0"}/>
                <img src="./logo.png" className={style.logo} alt="Play"/>
                <SkipForwardFill className={style.titleCommand + " mr-0"}/>
            </h1>
            <h2 className={style.subtitle}>Un nuovo modo di ascoltare la musica</h2>
          </Col>
        </Row>

        <Container className="text-light my-md-5" id="more">
          <Row className="mt-5 pt-md-5">
            <Col>
              <h3 className="display-5 text-capitalize py-md-5">Ascolta la musica delle tue emozioni</h3>
              <p className='text-center w-50 mx-auto py-4'>
                Più studi hanno dimostrato che ogni brano musicale è in grado di suscitare emozioni... la scoperta interessentante dello studio 
                dell'Università di Berkeley che le emozioni suscitate in persone con la stessa cultura, provenienza... sono le medesime
              </p>
              <Disk index={currentIndex}/>
            </Col>
          </Row>
          <Row>
            <Col>
              
            </Col>
          </Row>     
        </Container>

        <Container className="text-light text-center my-md-5 pt-md-5">
          <Row className="mt-5 pt-5">
            <Col>
              <h3 className="display-4 text-capitalize">Cervello e musica</h3>
              
              <p>Lorem ???</p>
              <Button variant="outline-light" className="btn-outline my-3" href="/idea">
                <ChevronDoubleRight/> <span className="mx-3">Scopri di più</span>
              </Button>
            </Col>
          </Row>     
        </Container>
    </div>
  )
}