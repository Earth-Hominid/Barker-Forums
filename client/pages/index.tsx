import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Barker | Howl at the moon. </title>
        <meta
          name="description"
          content="A social platform hosting howls, woofs, and barks."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  );
};

export default Home;
