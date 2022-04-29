import Head from 'next/head'
import { Button,Col, Container, Row } from 'react-bootstrap';
import style from '../style/idea.module.css';
import Helmet from 'react-helmet';
import {Chart as ChartJS, RadialLinearScale,PointElement,LineElement,Filler,Tooltip,Legend,} from 'chart.js';
import { Radar } from 'react-chartjs-2';

export default function VinilRadar(props) {
  const {dts, dte, title, id, v} = props;
  const color = [];
  const bg = [];
  const emotion = [];

  if(dte){
    dte.forEach(element => {
      switch(element){
        case 'Ansia': emotion.push('   Ansia    '); color.push('#fc1716'); bg.push('#fc171690'); break
        case 'Bellezza': emotion.push('  Bellezza  '); color.push('#FE266D'); bg.push('#FE266D90'); break
        case 'Calma': emotion.push('   Calma    '); color.push('#ff47bc'); bg.push('#ff47bc90'); break
        case 'Divertimento': emotion.push('Divertimento'); color.push('#ff7667'); bg.push('#ff766790'); break
        case 'Energia': emotion.push('  Energia   '); color.push('#ff8a43'); bg.push('#ff8a4390'); break
        case 'Fastidio': emotion.push('  Fastidio  '); color.push('#ffcf1a'); bg.push('#ffcf1a90'); break
        case 'Gioia': emotion.push('   Gioia    '); color.push('#FAFF07'); bg.push('#FAFF0790'); break
        case 'Passione': emotion.push('  Passione  '); color.push('#adfc21'); bg.push('#adfc2190'); break
        case 'Paura': emotion.push('   Paura    '); color.push('#44ff41'); bg.push('#44ff4190'); break
        case 'Sfida': emotion.push('   Sfida    '); color.push('#29f887'); bg.push('#29f88790'); break
        case 'Sogno': emotion.push('   Sogno    '); color.push('#0ff0eb'); bg.push('#0ff0eb90'); break
        case 'Trionfo': emotion.push('  Trionfo   '); color.push('#6554ff'); bg.push('#6554ff90'); break
        case 'Tristezza': emotion.push(' Tristezza  '); color.push('#bb17ff'); bg.push('#bb17ff90'); break
      }
    });
  }

  ChartJS.register(RadialLinearScale,PointElement,LineElement,Filler,Tooltip,Legend);
const data = {
  labels: emotion,
  datasets: [
    {
      data: dts,
      backgroundColor: bg,
      borderColor: color,
      borderWidth: 0.8,
    },
  ],
};

const options= {
  chartArea: { backgroundColor: 'blue' },
 scales:{
   r:{
    angleLines:{color:'#00000030'},
    grid:{color:'black', circular:true},
    pointLabels:{
      color: color,
      font: {family:'Prompt',weight:'bold'},
      width: '100px'
    },
    ticks:{display:false},
    min: 0, max: 50
    }
  },
  plugins: {
    legend: {display:false},
    tooltip: {
      callbacks: {
        label: function (context) {
          return context.formattedValue+"%";
        }
      }
    }
  }
};
  return (
    <>
      <div className={v?'':'invisible '+'px-5 mx-2'} style={{width:'390px'}}>
        <div className='d-flex flex-wrap justify-content-start' style={{height:'80px',}}>        
          <h2 className='h6 m-0 px-2 py-3'>{title}</h2>
          </div>
      </div>
      {
        v && (
          <div style={{width:"340px",height:"350px", position:'relative', top:'-85px'}}>
              <Radar data={data} options={options} 
              style={{backgroundImage:"url(./disk.png)",backgroundSize:'contain',backgroundPosition: "center",backgroundRepeat: "no-repeat"}}/>
          </div>)
      }
    </>
  )
}