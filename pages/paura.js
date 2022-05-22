import useSound from 'use-sound';
import Emotion from './emotion-temp';
import Helmet from 'react-helmet';
import Player from '../src/player';

export default function Home() {

  const name = 'paura';

  const titles=['Mr. Pumpkin', 'Lurk', 'Psycho'];
  const artists=['StudioKolomna', 'Monument Music', 'Virtual_Vex'];
  const tracks=[useSound('./music/'+name+'/1.mp3'),useSound('./music/'+name+'/2.mp3'),useSound('./music/'+name+'/3.mp3')];
  const imgs=["./music/"+name+"/1.webp","./music/"+name+"/2.webp","./music/"+name+"/3.webp"];

  return (
    <>
    <Helmet>
        <title>Play - Ascolta Musica per la Paura</title>
        <meta name="description"
          content="Ascolta la musica giusta per superare la paura. Vivi un esperienza unica... ascolta le tue emozioni gratuitamente!" />
    </Helmet>

    <Emotion 
    title={name}
    linkImg="https://www.freepik.com/free-photo/portrait-little-girl-headphones-purple-gradient_11359467.htm"
    st="btn_pr" color="cPaura"
    card={["gioia","fastidio","ansia"]}
    cit="Chi ha paura muore ogni giorno, chi non ha paura muore una volta sola." 
    Acit="Paolo Borsellino"
    idSpotify="0t3mB8VSp3BKf7dn37mo64"
    player={<Player title={name} t={titles} a={artists} img={imgs}/>}/>
    </>
  )
}