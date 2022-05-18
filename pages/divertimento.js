import Helmet from 'react-helmet';
import useSound from 'use-sound';
import Emotion from './emotion-temp';

export default function Home() {

  const controls = new THREE.OrbitControls();

  const name = 'divertimento';

  const titles=['Anywhere '];
  const artists=['Ikson'];
  const tracks=[useSound('./music/'+name+'/1.mp3')];
  const imgs=["./music/"+name+"/1.jpg"];

  return (
    <>
    <Helmet>
        <title>Play - Ascolta Musica per il DIvertimento</title>
        <meta name="description"
          content="Ascolta la musica giusta per far esplodere il divertimento. Vivi un esperienza unica... ascolta le tue emozioni gratuitamente!" />
    </Helmet>

    <Emotion 
    title={name}
    linkImg="https://www.freepik.com/free-photo/calm-happy-caucasian-man-s-portrait-gradient-studio-background-neon-light-beautiful-male-model-with-hipster-style-earphones-concept-human-emotions-facial-expression-sales-ad_13342806.htm"
    player={<></>}
    st="btn_dv"  color="cDivertimento"
    card={["gioia","energia"]}
    cit="Io penso che il divertimento sia una cosa seria." 
    Acit="Italo Calvino"
    idSpotify="0nWrSLh5YGnYTqCWT2BY4S"
    t={titles}
    a={artists}
    trak={tracks}
    img={imgs}
    n={1}/>
    </>
  )
}