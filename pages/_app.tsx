import '@/styles/globals.css';
import type { AppProps } from 'next/app';

import MainLayout from '@/layouts/main';
import React from 'react';

import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = React.useState(() => new QueryClient());

  return (
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <MainLayout>
            <Component {...pageProps} />
          </MainLayout>
        </Hydrate>
      </QueryClientProvider>
    </React.StrictMode>
  );
}
