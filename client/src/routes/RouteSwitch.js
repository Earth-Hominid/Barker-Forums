import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ApolloProvider, InMemoryCache, ApolloClient } from '@apollo/client';
import { SiteContent } from '../context/SiteContent';
import HomePage from './HomePage';
import LogInPage from './LogInPage';
import NotFoundPage from './NotFoundPage';
import SignUpPage from './SignUpPage';
import WithNav from '../outlet/WithNav';

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
  cache: new InMemoryCache(),
});

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <ApolloProvider client={client}>
        <Routes>
          <Route element={<WithNav />}>
            <Route path="/barker" element={<HomePage />} />
            <Route path="/sign-up" element={<SignUpPage />} />
            <Route path="/log-in" element={<LogInPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </ApolloProvider>
    </BrowserRouter>
  );
};

export default RouteSwitch;
