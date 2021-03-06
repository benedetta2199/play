import useSound from 'use-sound';
import Emotion from './emotion-temp';
import Helmet from 'react-helmet';
import Player from '../src/player';

export default function Home() {

  const name = 'energia';

  const titles=['Collide', 'Metal gear'];
  const artists=['Elektronomia', 'Bosnow'];
  const tracks=[useSound('./music/'+name+'/1.mp3'),useSound('./music/'+name+'/2.mp3')];
  const imgs=["./music/"+name+"/1.webp","./music/"+name+"/2.webp"];

  return (
    <>
    <Helmet>
        <title>Play - Ascolta Musica per l'Energia</title>
        <meta name="description"
          content="Ascolta la musica giusta per ricaricare la tua energia. Vivi un esperienza unica... ascolta le tue emozioni gratuitamente!" />
    </Helmet>

    <Emotion 
    title={name}
    linkImg="https://www.freepik.com/free-photo/young-girl-jumping-pink-wall_12648038.htm"
    st="btn_en" color="cEnergia"
    card={["divertimento","gioia","sfida"]}
    cit="Il mondo appartiene a quelli che hanno la maggiore energia." 
    Acit="Visconte Alexis de Tocqueville"
    idSpotify="6MJnS1xfiytzSZxbjwh4Xr"
    player={<Player title={name} t={titles} a={artists} img={imgs}/>}/>
    </>
  )
}
