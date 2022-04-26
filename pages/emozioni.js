import Head from 'next/head'
import CardEmotion from './card'

export default function Home() {
  return (
    <div className="container">
    <Head>
      <title>Create Next App</title>
    </Head>

    <main>
      <h1 className='text-center'>Le 13 emozioni</h1>
      <div className="d-flex flex-wrap justify-content-around">
        <CardEmotion titolo="ansia"/>
        <CardEmotion titolo="bellezza"/>
        <CardEmotion titolo="calma"/>
        <CardEmotion titolo="divertimento"/>
        <CardEmotion titolo="energia"/>
        <CardEmotion titolo="fastidio"/>
        <CardEmotion titolo="gioia"/>
        <CardEmotion titolo="passione"/>
        <CardEmotion titolo="paura"/>
        <CardEmotion titolo="sfida"/>
        <CardEmotion titolo="sogno"/>
        <CardEmotion titolo="trionfo"/>
        <CardEmotion titolo="tristezza"/>
      </div>
    </main>

  </div>
  )
}
