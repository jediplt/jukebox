import "common/App.css";
import React, { useEffect } from "react";
import { Provider, useSelector } from "react-redux";
import { store } from '../store';
import { SWRConfig } from 'swr';
import { withRouter, useRouter } from 'next/router';
import Head from 'next/head'
import Header from 'components/Header'
import axios from 'axios'
import VirtualController from 'components/VirtualController'
import 'common/KeyboardListener'
import Player from 'components/Player'
function MyApp(context) {
  const { Component, pageProps: pageProps1 } = context;
  const route = useRouter();
  const pageProps = { ...pageProps1, pathname: route.pathname, query: route.query };

  if (pageProps.pathname === "/_error" || pageProps.pathname === "/404" || pageProps.pathname === "/401") { return <Component {...pageProps} /> }
  return <SWRConfig value={{
    fetcher: async (...args) => {
      const theURL = args[0]
      return (await axios.get(theURL)).data
    }
  }}>

    <Provider store={store}>
      <Player />
      <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
        <Header />
        <VirtualController />
        <div style={{ flex: 1, backgroundColor: 'black' }}>
          <Component {...pageProps} />
        </div>
      </div>
    </Provider>
  </SWRConfig>
}

export default withRouter(MyApp);

