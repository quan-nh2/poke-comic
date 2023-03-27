import React, { ReactElement, ReactNode } from 'react';
import Head from 'next/head';

import Header from '@/components/ui/Header';
import Navbar from '@/components/ui/Navbar';

type BasicLayoutProps = {
  children: ReactElement;
};

const MainLayout = ({ children }: BasicLayoutProps) => {
  const { props } = children;

  return (
    <>
      <Head>
        <title>PokeComic</title>
        <meta name='description' content='' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        {props && props.statusCode === 404 ? (
          <> {children}</>
        ) : (
          <>
            <Header />
            {children}
            <Navbar />
          </>
        )}
      </main>
    </>
  );
};

export default MainLayout;
