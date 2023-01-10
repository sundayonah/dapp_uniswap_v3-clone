import "../styles/globals.css";

import { NavBar } from "../Components/index";
import { SwapTokenContextProvider } from "../Context/SwapContext";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <SwapTokenContextProvider>
        <NavBar />
        <Component {...pageProps} />
      </SwapTokenContextProvider>
    </div>
  );
}

export default MyApp;
