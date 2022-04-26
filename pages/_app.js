import '../style/globals.css';
import React, { useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router'
import NavBar from '../src/navbar';
//import * as gtag from '../src/gtag'
import "bootstrap/dist/css/bootstrap.css";
import Footer from '../src/footer';
import Helmet from 'react-helmet';

function MyApp({ Component, pageProps }) {
  /*const router = useRouter()
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])*/

  const router = useRouter();
  
  return (
    <>
      <Helmet htmlAttributes={{ lang : "it"}}>
        <meta charSet="utf-8" />
      </Helmet>
      <Head>
        <link rel="icon" href="/logo.png" />
        <title>Play</title>
      </Head>
      <NavBar page={router.pathname}/>
      <main>
        <Component {...pageProps} />
      </main>
      <Footer/>
    </>
  )
}

export default MyApp

