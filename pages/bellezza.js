import Helmet from 'react-helmet';
import useSound from 'use-sound';
import Emotion from './emotion-temp';

export default function Home() {

  const name = 'bellezza';

  const titles=['Voyager', 'Morning', 'Life Made More'];
  const artists=['Vens Adams', 'Swoop', 'Roo Walker'];
  const tracks=[useSound('./music/'+name+'/1.mp3'),useSound('./music/'+name+'/2.mp3'),useSound('./music/'+name+'/3.mp3')];
  const imgs=["./music/"+name+"/1.webp","./music/"+name+"/2.webp","./music/"+name+"/3.webp"];

  return (
    <>
    <Helmet>
        <title>Play - Ascolta Musica per la Bellezza</title>
        <meta name="description"
          content="Ascolta la musica giusta per meravigliarti della bellezza. Vivi un esperienza unica... ascolta le tue emozioni gratuitamente!" />
      </Helmet>
      
      <Emotion 
      title={name}
      linkImg="https://www.freepik.com/free-photo/beautiful-girl-fashionable-swimsuit-isolated-gradient-neon-light_20053160.htm"
      st="btn_be" color="cBellezza"
      card={["sogno","passione"]}
      cit="La bellezza risplende nel cuore di colui che ad essa aspira più che negli occhi di colui che la vede." 
      Acit="Khalil Gibran"
      idSpotify="1tw3fSQdDI2cVsSTRaNWyY"
      t={titles}
      a={artists}
      trak={tracks}
      img={imgs}
      n={3}/>
    </>
  )
}
