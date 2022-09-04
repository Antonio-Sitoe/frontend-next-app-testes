import type { AppProps } from "next/app";

// Default theme
// import '@splidejs/react-splide/css';


// or other themes


// or only core styles
import '@splidejs/react-splide/css/core';


function MyApp({ Component, pageProps }: AppProps) {
  return (
      <Component {...pageProps} />
  );
}

export default MyApp;
