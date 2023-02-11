import React, { useState } from 'react';
import AppContext from '../context/appContext';
// import styles from '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const [state, setstate] = useState({});

  return (
    <AppContext.Provider value={state}>
      <Component {...pageProps} />
    </AppContext.Provider>
  );
}

export default MyApp;
