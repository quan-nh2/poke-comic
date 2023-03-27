import Head from 'next/head';
import styles from '@/styles/Home.module.css';

import 'tailwindcss/tailwind.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>PokeComic</title>
        <meta name='description' content='PokeComic platform' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={styles.main}>
        <h1 className='text-[24px]'>Poke Comic</h1>
      </main>
    </>
  );
}
