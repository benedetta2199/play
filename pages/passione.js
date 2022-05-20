import useSound from 'use-sound';
import Emotion from './emotion-temp';
import Helmet from 'react-helmet';

export default function Home() {

  const name = 'passione';

  const titles=['Sunshine Music', 'I Should Let You Go', 'Love', 'With you in the morning'];
  const artists=['Danijel-Zambo','A Himitsu', 'Alex–Productions', 'Carl Storm'];
  const tracks=[useSound('./music/'+name+'/1.mp3'),useSound('./music/'+name+'/2.mp3'),useSound('./music/'+name+'/3.mp3'),useSound('./music/'+name+'/4.mp3')];
  const imgs=["./music/"+name+"/1.webp","./music/"+name+"/2.webp","./music/"+name+"/3.webp","./music/"+name+"/4.webp"];

  return (
    <>
      <Helmet>
        <title>Play - Ascolta Musica per la Passione</title>
        <meta name="description"
          content="Ascolta la musica giusta per lasciarti trasportare dalla passione. Vivi un esperienza unica... ascolta le tue emozioni gratuitamente!" />
      </Helmet>

      <Emotion 
      title={name}
      linkImg="https://www.freepik.com/free-photo/portrait-young-woman-pink-wall-with-headphones_9264005.htm"
      st="btn_pass" color="cPassione"
      card={["bellezza","calma"]}
      cit="Non si può descrivere la passione, la si può solo vivere." 
      Acit="Enzo Ferrari"
      idSpotify="0xh1BfER9DtyngwW4yoIui"
      t={titles}
      a={artists}
      trak={tracks}
      img={imgs}
      n={4}/>
    </>
  )
}