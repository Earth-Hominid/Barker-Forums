import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';
import Navigation from '../components/navigation/Navigation';

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <div className="h-screen overflow-y-scroll bg-stone-200">
        <Navigation />
        <Component {...pageProps} />
      </div>
    </SessionProvider>
  );
}

export default MyApp;