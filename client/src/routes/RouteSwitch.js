import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { SiteContent } from '../context/SiteContent';
import HomePage from './HomePage';
import LogInPage from './LogInPage';
import NotFoundPage from './NotFoundPage';
import SignUpPage from './SignUpPage';
import WithNav from '../outlet/WithNav';

const RouteSwitch = () => {
  const [messageData, setMessageData] = useState([{}]);

  useEffect(() => {
    fetch('/chatroom')
      .then((response) => response.json())
      .then((data) => {
        setMessageData(data);
      });
  }, []);

  return (
    <BrowserRouter>
      <SiteContent.Provider
        value={{
          messageData,
        }}
      >
        <Routes>
          <Route element={<WithNav />}>
            <Route path="/barker" element={<HomePage />} />
            <Route path="/sign-up" element={<SignUpPage />} />
            <Route path="/log-in" element={<LogInPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </SiteContent.Provider>
    </BrowserRouter>
  );
};

export default RouteSwitch;
