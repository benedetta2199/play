import useSound from 'use-sound';
import Emotion from './emotion-temp';
import Helmet from 'react-helmet';

export default function Home() {

  const name = 'fastidio';

  const titles=['Firestorm', 'One Shot'];
  const artists=['Abbynoise', 'Soundroll'];
  const tracks=[useSound('./music/'+name+'/1.mp3'),useSound('./music/'+name+'/2.mp3'),useSound('./music/'+name+'/3.mp3')];
  const imgs=["./music/"+name+"/1.webp","./music/"+name+"/2.webp","./music/"+name+"/3.webp"];

  return (
    <>
      <Helmet>
        <title>Play - Ascolta Musica per il Fastidio</title>
        <meta name="description"
          content="Ascolta la musica giusta per sfogare il tuo fastidio. Vivi un esperienza unica... ascolta le tue emozioni gratuitamente!" />
      </Helmet>
      
      <Emotion 
      title={name}
      linkImg="https://www.freepik.com/free-photo/singing-like-celebrity-rockstar-caucasian-boy-s-portrait-dark-studio-background-neon-light-beautiful-curly-model-concept-human-emotions-facial-expression-sales-ad-music-hobby-dream_14222713.htm"
      st="btn_fs" color="cFastidio"
      card={["ansia","paura", "gioia"]}
      cit="Un’avventura è soltanto un fastidio considerato nel modo giusto. Un fastidio un’avventura considerata nel modo sbagliato."
      Acit="GK Chesterton"
      idSpotify="7B1dNUa98X1zBrStNHeKFD"
      t={titles}
      a={artists}
      trak={tracks}
      img={imgs}
      n={2}/>
    </>
  )
}
