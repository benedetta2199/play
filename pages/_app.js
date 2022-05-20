import '../style/globals.css';
import React, { useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router'
import NavBar from '../src/navbar';
//import * as gtag from '../src/gtag'
import "bootstrap/dist/css/bootstrap.css";
import Footer from '../src/footer';
import Helmet from 'react-helmet';
import Script from 'next/script';
import * as ga from '../lib/google-analytics'

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

  useEffect(() => {
    const handleRouteChange = (url) => {
      ga.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])
  
  return (
    <>
      <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-B4LSMB3HNB" />

      <Script strategy="afterInteractive" id="google-analytics-script">
          {`
               window.dataLayer = window.dataLayer || [];
               function gtag(){dataLayer.push(arguments);}
               gtag('js', new Date());
             
               gtag('config', '${process.env.GOOGLE_ANALYTICS_ID}');
          `}
      </Script>

      <Helmet htmlAttributes={{lang:"it"}}>
        <html lang={"it" }/>  
        <meta charSet="utf-8" />
        <meta name='robots' content="index, follow"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
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

