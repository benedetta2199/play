import useSound from 'use-sound';
import Emotion from './emotion-temp';
import Helmet from 'react-helmet';
import Player from '../src/player';

export default function Home() {

  const name = 'gioia';

  const titles=['Lappland'];
  const artists=['Scandinavianz'];
  const tracks=[useSound('./music/'+name+'/1.mp3')];
  const imgs=["./music/"+name+"/1.webp"];

  return (
    <>
      <Helmet>
        <title>Play - Ascolta Musica per la Gioia</title>
        <meta name="description"
          content="Ascolta la musica giusta per vivere la gioia. Vivi un esperienza unica... ascolta le tue emozioni gratuitamente!" />
      </Helmet>
    <Emotion 
    title={name}
    linkImg="https://www.freepik.com/free-photo/happy-young-woman-listening-music-smiling-trendy-blue-neon-studio_12046069.htm"
    st="btn_gi" color="cGioia"
    card={["divertimento","energia","sogno"]}
    cit="A volte la tua gioia è la fonte del tuo sorriso, ma spesso il tuo sorriso può essere la fonte della tua gioia." 
    Acit="Thich Nhat Hanh"
    idSpotify="1ffzRcU3CQm7cbJ5AQcxvB"
    player={<Player title={name} t={titles} a={artists} img={imgs}/>}/>
    </>
  )
}