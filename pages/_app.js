import React, { useState } from "react";
import "../styles/globals.css";
import { ThemeProvider } from "styled-components";
import { theme } from "../styles/theme";

export const StateContext = React.createContext(null);

const MyApp = ({ Component, pageProps }) => {
  const [stateContext, setStateContext] = useState({ dateAppointed: "" });
  return (
    <ThemeProvider theme={theme}>
      <StateContext.Provider value={{ stateContext, setStateContext }}>
        <Component {...pageProps} />
      </StateContext.Provider>
    </ThemeProvider>
  );
};
export default MyApp;
