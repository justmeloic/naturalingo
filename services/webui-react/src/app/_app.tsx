import type { AppProps } from "next/app";
import { useEffect } from "react";
import WOW from "wowjs";
import "wowjs/css/libs/animate.css";
import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // Initialize WOW.js when the component mounts
    new WOW.WOW({
      live: false, // Very important for Next.js to work correctly. !!
    }).init();
  }, []); // Empty dependency array ensures this runs only once

  return (
    <>
      <Head>
        <title>From First Principles</title>
        <link rel="icon" href="/images/tab-logo.png" />{" "}
        <link rel="apple-touch-icon" href="/images/tab-logo.png" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/tab-logo.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/images/tab-logo.png"
        />
        <meta name="description" content="Your website description" />{" "}
        {/* Need this for SEO later!!!*/}
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
