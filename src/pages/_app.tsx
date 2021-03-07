import React from 'react';
import Head from 'next/head';
import '../styles/globals.scss';

import MenuView from '../views/menu/MenuView';

function MyApp({ Component, pageProps }) {

  return <>
    <Head>
      <title>Designo | Multi-page App</title>
      <meta name="description" content="A mobile responsive multi-page web application" />
    </Head>

    <div className="flex flex-col h-screen">
      <MenuView />
      <div className="mt-24 sm:mt-32">
        <Component {...pageProps} />
      </div>
    </div>
  </>
}

export default MyApp
