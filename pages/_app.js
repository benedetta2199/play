import '../style/globals.css';
import React, { useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router'
import NavBar from '../src/navbar';
//import * as gtag from '../src/gtag'
import "bootstrap/dist/css/bootstrap.css";
import Footer from '../src/footer';

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
  
  return (
    <>
      <Head>
        <link rel="icon" href="/logo.png" />
      </Head>
      <NavBar/>
      <main>
        <Component {...pageProps} />
      </main>
      <Footer/>
    </>
  )
}

export default MyApp

