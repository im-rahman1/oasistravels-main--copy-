import React, { useState } from "react";
import AppContext from "../context/appContext";
import "@/styles/globals.css";
import Layout from "../components/layout";

function MyApp({ Component, pageProps }) {
  const [state, setstate] = useState({});

  return (
    <AppContext.Provider value={state}>
      <Component {...pageProps} />
    </AppContext.Provider>
  );
}

export default MyApp;
