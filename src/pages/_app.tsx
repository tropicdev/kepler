import { type AppType } from "next/app";
import { api } from "~/utils/api";
import "~/styles/globals.css";
import Head from "next/head";


const MyApp: AppType = ({
  Component,
  pageProps: { ...pageProps },
}) => {
  return (
    <>
      <Head>
        <title>Kepler</title>
        <meta name="description" content="With ❤ from Tropic" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default api.withTRPC(MyApp);
