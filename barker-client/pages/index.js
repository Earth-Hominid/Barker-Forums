import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Layout from '../components/layout/Layout';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Barker | Bark your heart out. </title>
        <meta
          name="description"
          content="Barker is online platform that hosts forums"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout></Layout>

      <main></main>

      <footer></footer>
    </div>
  );
}
