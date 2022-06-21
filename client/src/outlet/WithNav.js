import Navigation from '../components/navigation/Navigation';
import { Outlet } from 'react-router';
const WithNav = () => {
  return (
    <>
      <Navigation />
      <Outlet />
    </>
  );
};

export default WithNav;
