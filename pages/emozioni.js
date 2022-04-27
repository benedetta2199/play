import Head from 'next/head'
import Helmet from 'react-helmet'
import CardEmotion from './card'

export default function Home() {
  return (
    <div className="container">
      <Helmet>
          <title>Play - Emozioni</title>
          <meta name="description" content="" />
      </Helmet>
      <h1 className='text-center'>Le 13 emozioni</h1>
      <p className='text-center'>Servendosi di analisi statistiche, i ricercatori hanno concluso che l'esperienza soggettiva della musica può essere mappata all'interno di 13 emozioni chiave:</p>
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

  </div>
  )
}
