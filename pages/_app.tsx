import '@/styles/globals.css';
import type { AppProps } from 'next/app';

import MainLayout from '@/layouts/main';
import React from 'react';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <React.StrictMode>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </React.StrictMode>
  );
}
