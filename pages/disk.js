import Head from 'next/head'
import { Button, Col, Container, Row } from 'react-bootstrap';
import Piano from '../src/piano';
import style from '../style/idea.module.css';
import { SkipBackwardFill, SkipForwardFill, ChevronDoubleDown, ChevronDoubleRight } from 'react-bootstrap-icons';
import Helmet from 'react-helmet';
import VinilRadar from './vinil-radar';

export default function Disk(props) {

  const {index} = props;
  const cd= [];
  var cont = 0, i = 0;

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
    {dts:[42,22,10,8,14], dte:['Energia','Fastidio','Sfida','Trionfo','Ansia'], title:'Run the World', id:"1uXbwHHfgsXcUKfSZw5ZJ0"},

  ]

  {
    /*
    for(var i=0; i<5; i++){

    const n = Math.floor(Math.random() * disk.length)%2;
    if(index.includes(n)){
      i--;
    } else{
      cd.push(<VinilRadar dts={disk[i].dts} dte={disk[n].dte} title={disk[n].title} id={disk[n].id} key={i}/>);
    }
  }
  while(cont>5 || i>=disk.length){
    if(parseInt(Math.random())%2==0){
      cd.push(<VinilRadar dts={disk[i].dts} dte={disk[n].dte} title={disk[n].title} id={disk[n].id} key={i}/>);
      cont++;
    }
    i++
  }*/
}

  return (
    
      <div className='d-flex flex-wrap justify-content-center pt-4'>
        {disk.map(e=>{
          <iframe src={"https://open.spotify.com/embed/track/"+e.id} style={{borderRadius:'10px', boxShadow:'0 0 15px #000'}} width="80" height="80"/>
        })}
        <VinilRadar dts={dts} dte={dte} title={title}/>
      </div>
            
  )
}