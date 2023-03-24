import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
import type { AppProps } from "next/app";
import Head from "next/head";
import "../styles/index.css";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

interface OrbitAppProps extends AppProps {
  Component: NextPageWithLayout;
}

function OrbitApp(props: OrbitAppProps) {
  const { Component, pageProps } = props;
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <>
      <Head>
        <title>ORBIT</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {getLayout(<Component {...pageProps} />)}
    </>
  );
}

export default OrbitApp;
