import useSound from 'use-sound';
import Emotion from './emotion-temp';

export default function Home() {

  const name = 'sogno';

  const titles=['Serenity', 'Mountain Spirit', 'Colorful Changes'];
  const artists=['Ilya Kuznetsov', 'Vadim Krakhmal', 'Volo'];
  const tracks=[useSound('./music/'+name+'/1.mp3'),useSound('./music/'+name+'/2.mp3'),useSound('./music/'+name+'/3.mp3')];
  const imgs=["./music/"+name+"/1.jpg","./music/"+name+"/2.jpg","./music/"+name+"/3.jpg"];

  return (
    <>
    <Helmet>
        <title>Play - Ascolta Musica per il Sogno</title>
        <meta name="description"
          content="Ascolta la musica giusta per immergerti in un sogno. Vivi un esperienza unica... ascolta le tue emozioni gratuitamente!" />
    </Helmet>

    <Emotion 
    title={name}
    linkImg="https://www.freepik.com/free-photo/caucasian-woman-s-portrait-isolated-blue-background-multicolored-neon-light_13636129.htm"
    player={<></>}
    st="btn_sg" color="cSogno"
    card={["bellezza","calma","passione"]}
    cit="Se puoi sognarlo, puoi farlo!" 
    Acit="Walt Disney"
    idSpotify="06JKENbVcsDWzBNocudtcd"
    t={titles}
    a={artists}
    trak={tracks}
    img={imgs}
    n={3}/>
    </>
  )
}