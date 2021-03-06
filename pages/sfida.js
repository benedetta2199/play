import useSound from 'use-sound';
import Emotion from './emotion-temp';
import Helmet from 'react-helmet';
import Player from '../src/player';

export default function Home() {

  const name = 'sfida';

  const titles=['Into The Red', 'Overdrive', 'Rebel'];
  const artists=['Trinity', 'Matrika', 'Mojo'];
  const tracks=[useSound('./music/'+name+'/1.mp3'),useSound('./music/'+name+'/2.mp3'),useSound('./music/'+name+'/3.mp3')];
  const imgs=["./music/"+name+"/1.webp","./music/"+name+"/2.webp","./music/"+name+"/3.webp"];

  return (
    <>
    <Helmet>
        <title>Play - Ascolta Musica per la Sfida</title>
        <meta name="description"
          content="Ascolta la musica giusta per affrontare ogni sfida. Vivi un esperienza unica... ascolta le tue emozioni gratuitamente!" />
    </Helmet>
    
    <Emotion 
    title={name}
    linkImg="https://www.freepik.com/free-photo/human-emotions-facial-expression-sales-ad-concept-freak-s-culture-devices_20269238.htm"
    st="btn_sf" color="cSfida"
    card={["trionfo","energia"]}
    cit="Le sfide nella vita ti aiutano a scoprire chi sei." 
    Acit="Bernice Johnson Reagon"
    idSpotify="1MKjci92viwng4XLceBO2J"
    player={<Player title={name} t={titles} a={artists} img={imgs}/>}/>
    </>
  )
}