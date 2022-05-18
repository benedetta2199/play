import Helmet from 'react-helmet';
import useSound from 'use-sound';
import Emotion from './emotion-temp';

export default function Home() {

  const name = 'calma';

  const titles=['Music Is', 'Hometown', 'Nowhere To Be'];
  const artists=['Pryces', 'Northwestern', 'Cory Alstad'];
  const tracks=[useSound('./music/'+name+'/1.mp3'),useSound('./music/'+name+'/2.mp3'),useSound('./music/'+name+'/3.mp3')];
  const imgs=["./music/"+name+"/1.jpg","./music/"+name+"/2.jpg","./music/"+name+"/3.jpg"];

  return (
    <>
      <Helmet>
        <title>Play - Ascolta Musica per la Calma</title>
        <meta name="description"
          content="Ascolta la musica giusta per riscoprire la calma. Vivi un esperienza unica... ascolta le tue emozioni gratuitamente!" />
      </Helmet>

      <Emotion 
      title={name}
      linkImg="https://www.freepik.com/free-photo/inspiration-asian-young-woman-s-portrait-dark-wall-neon-light-beautiful-female-model-with-headphones-concept-human-emotions-facial-expression-youth-sales-ad_15803823.htm"
      st="btn_ca"  color="cCalma"
      card={["sogno","bellezza","tristezza"]}
      cit="Procedi con calma tra il frastuono e la fretta, e ricorda quale pace possa esservi nel silenzio." 
      Acit="Anonimo"
      idSpotify="1SFp8Q4Vltls4fsncw0XEh"
      t={titles}
      a={artists}
      trak={tracks}
      img={imgs}
      n={3}/>
    </>
  )
}
