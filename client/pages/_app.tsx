import type { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';
import { ApolloProvider } from '@apollo/client';
import client from '../apollo-client';
import '../styles/globals.css';
import Navigation from '../components/navigation/Navigation';

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <SessionProvider session={session}>
        <div className="h-screen overflow-y-scroll bg-stone-200">
          <Navigation />
          <Component {...pageProps} />
        </div>
      </SessionProvider>
    </ApolloProvider>
  );
}

export default MyApp;
