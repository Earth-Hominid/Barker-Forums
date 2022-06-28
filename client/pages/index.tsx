import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import HomePage from '../components/home-page/HomePage';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Barker | Howl at the moon. </title>
        <meta
          name="description"
          content="A social platform hosting howls, woofs, and barks."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomePage />
    </>
  );
};

export default Home;
