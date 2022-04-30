import Head from 'next/head'
import { Button, Col, Container, Row } from 'react-bootstrap';
import Piano from '../src/piano';
import style from '../style/idea.module.css';
import { SkipBackwardFill, SkipForwardFill, ChevronDoubleDown, ChevronDoubleRight } from 'react-bootstrap-icons';
import Helmet from 'react-helmet';
import VinilRadar from './vinil-radar';
import { useState } from 'react';

export default function Disk() {
  const [dts, setDts] =useState([0,0,0,0,0,0,0,0,0,0,0,0,0]);
  const [dte, setDte] = useState(['A','B','C','D','E','F','G','P','Pa','Sf','So','T','Tr']);
  const [title, setTitle]=useState('');
  
  const disk = [
    {dts:[31,0,24,5,0,0,26,0,0,0,0,9,0], title:'Eye of Tyger', id:"2KH16WveTQWT6KOG9Rg6e2", dte:['T','Tr','A','B','C','D','E','F','G','P','Pa','Sf','So']},
    {dts:[24,16,0,22,0,0,0,0,0,20,18,0,0], title:'Bitter Sweet Symphony', id:"57iDDD9N9tTWe75x6qhStw", dte: ['B','C','D','E','F','G','P','Pa','Sf','So','T','Tr','A']},
    {dts:[31,0,0,0,15,9,0,0,26,0,0,18,0], title:'The Rite of Spring', id:"5MSHxf0zVSajZknoxJC9Nj",dte:['A','B','C','D','E','F','G','P','Pa','Sf','So','T','Tr']},
    {dts:[34,0,0,19,0,0,0,10,17,18,0,0,0], title:'Human Nature', id:"35lAjvsvS9k9HHuP1fjDT8", dte:['P','Pa','Sf','So','T','Tr','A','B','C','D','E','F','G']},
    {dts:[31,0,28,23,0,0,0,0,11,0,0,9,0], title:'Summertime Sadness', id:"33CeM8NI7tfrNgciVOFMoo", dte:['Tr','A','B','C','D','E','F','G','P','Pa','Sf','So','T']},
    {dts:[27,0,12,0,0,15,0,0,17,0,0,0,23], title:"How Far I'll Go", id:"55dS7JjavLsf63BynwsbV5", dte:['C','D','E','F','G','P','Pa','Sf','So','T','Tr','A','B']},
    {dts:[34,30,0,13,0,8,0,0,0,14,0,0,0], title:'Mykonos', id:"7H71gZwWs3xPWnHM30NDUp", dte:['B','C','D','E','F','G','P','Pa','Sf','So','T','Tr','A']},
    {dts:[46,0,0,0,0,6,0,0,9,0,20,0,14], title:'Paris', id:"15vzANxN8G9wWfwAJLLMCg", dte:['C','D','E','F','G','P','Pa','Sf','So','T','Tr','A','B']},
    {dts:[26,17,0,0,0,0,14,0,0,17,0,14,0], title:'The Scientist', id:"75JFxkI2RXiU7L9VXzMkle", dte:['G','P','Pa','Sf','So','T','Tr','A','B','C','D','E','F']},
    {dts:[33,0,0,6,21,0,0,0,8,0,0,0,31], title:'Divide & Conquer', id:"3HD05YfZS6L8ZZD0Gl47Hq", dte:['F','G','P','Pa','Sf','So','T','Tr','A','B','C','D','E']},
    {dts:[42,22,0,0,0,10,0,8,0,14,0,0,0], title:'Run the World', id:"1uXbwHHfgsXcUKfSZw5ZJ0", dte:['E','F','G','P','Pa','Sf','So','T','Tr','A','B','C','D']},
  ]

  return (
      <div className='d-flex flex-wrap justify-content-center pt-4'>
        {disk.map((e,i)=>{
          return(<div className='d-flex flex-column justify-content-center px-2' key={i}>
            <iframe src={"https://open.spotify.com/embed/track/"+e.id} style={{borderRadius:'10px', boxShadow:'0 0 15px #000'}} width="80" height="80"/>
            <Button className='btn-sm mt-2 py-1 btn-secondary mb-2' 
            onClick={()=>{setDte(e.dte);setDts(e.dts);setTitle(title);}}>Dati</Button>
          </div>)
        })}
        <VinilRadar dts={dts} dte={dte} title={title}/>
      </div>
            
  )
}