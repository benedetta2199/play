import Helmet from 'react-helmet';
import useSound from 'use-sound';
import Player from '../src/player';
import Emotion from './emotion-temp';
export default function Home() {

  const name = 'ansia';

  const titles=['Residence', 'Our Champion', 'Heart Of The Wicked'];
  const artists=['Tatami', 'Anuch', 'Cjbeards'];
  const tracks=[useSound('./music/'+name+'/1.mp3'),useSound('./music/'+name+'/2.mp3'),useSound('./music/'+name+'/3.mp3')];
  const imgs=["./music/"+name+"/1.webp","./music/"+name+"/2.webp","./music/"+name+"/3.webp"];

  return (
    <>
      <Helmet>
        <title>Play - Ascolta Musica per l'Ansia</title>
        <meta name="description"
          content="Ascolta la musica giusta per calmare la tua ansia. Vivi un esperienza unica... ascolta le tue emozioni gratuitamente!" />
      </Helmet>
      

      <Emotion 
      title={name}
      linkImg="https://www.freepik.com/free-photo/young-handsome-serious-sad-hipster-man-listening-music-with-headphones-with-neon-lights_12698932.htm"
      st="btn_an" color="cAnsia"
      card={["calma","fastidio","paura"]}
      cit="Eccola lì, l’ansia che prova a sedurre la tranquillità con una bellissima paura." 
      Acit="Fabrizio Caramagna"
      idSpotify="1BC4mwJaw0nlQszRvrocIk"
      player={<Player title={name} t={titles} a={artists} img={imgs}/>}/>
    </>
  )
}