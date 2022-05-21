import useSound from 'use-sound';
import Emotion from './emotion-temp';
import Helmet from 'react-helmet';
import Player from '../src/player';

export default function Home() {

  const name = 'tristezza';

  const titles=['Filaments', 'Amaranth'];
  const artists=['Scott Buckley', 'Enzalla'];
  const tracks=[useSound('./music/'+name+'/1.mp3'),useSound('./music/'+name+'/2.mp3')];
  const imgs=["./music/"+name+"/1.webp","./music/"+name+"/2.webp"];

  return (
    <>
    <Helmet>
        <title>Play - Ascolta Musica per la Tristezza</title>
        <meta name="description"
          content="Ascolta la musica giusta per rifugiarti nella tua tristezza. Vivi un esperienza unica... ascolta le tue emozioni gratuitamente!" />
      </Helmet>
    <Emotion 
    title={name}
    linkImg="https://www.freepik.com/free-photo/african-young-man-portrait-with-headphones-dark-wall-with-copy-space_15560155.htm"
    st="btn_tr" color="cTristezza"
    card={["gioia","divertimento","calma"]}
    cit="La tristezza viene dalla solitudine del cuore." 
    Acit="Montesquieu"
    idSpotify="6CWmwdX4XPWexAs8D8HmhJ"
    player={<Player title={name} t={titles} a={artists} img={imgs}/>}/>
    </>
  )
}