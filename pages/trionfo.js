import useSound from 'use-sound';
import Emotion from './emotion-temp';
import Helmet from 'react-helmet';
import Player from '../src/player';

export default function Home() {

  const name = 'trionfo';

  const titles=['Achievement', 'End This'];
  const artists=['Phillip Anderson', 'Ivan King'];
  const tracks=[useSound('./music/'+name+'/1.mp3'),useSound('./music/'+name+'/2.mp3')];
  const imgs=["./music/"+name+"/1.webp","./music/"+name+"/2.webp"];

  return (
    <>
    <Helmet>
        <title>Play - Ascolta Musica per il Trionfo</title>
        <meta name="description"
          content="Ascolta la musica giusta per vivere il trionfo. Vivi un esperienza unica... ascolta le tue emozioni gratuitamente!" />
    </Helmet>

    <Emotion 
    title={name}
    linkImg="https://www.freepik.com/free-photo/smiling-caucasian-young-man-s-portrait-handsome-male-model-casual-style_15560194.htm"
    st="btn_tri" color="cTrionfo"
    card={["sfida","energia"]}
    cit="Il coraggio, che è il nostro sesto senso, ci fa scoprire la strada più breve per il trionfo." 
    Acit="Khalil Gibran"
    idSpotify="5ecBzpbT8P9hTphGuTo8MV"
    player={<Player title={name} t={titles} a={artists} img={imgs}/>}/>
    </>
  )
}