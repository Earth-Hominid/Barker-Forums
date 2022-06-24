import { useState } from 'react';
import { signIn, useSession, signOut } from 'next-auth/react';
import TopNavigation from './top-navigation/TopNavigation';
import BottomNavigation from './bottom-navigation/BottomNavigation';

const Navigation = () => {
  const [navigationMenuToggle, setNavigationMenuToggle] = useState(false);

  const { data: session } = useSession();

  const toggleNavigationButton = () => {
    if (navigationMenuToggle) {
      setNavigationMenuToggle(false);
    } else {
      setNavigationMenuToggle(true);
    }
  };

  const handleNavigationMenuClick = () => {
    toggleNavigationButton();
  };

  return (
    <>
      <TopNavigation
        handleNavigationMenuClick={handleNavigationMenuClick}
        navigationMenuToggle={navigationMenuToggle}
        signOut={signOut}
        signIn={signIn}
        session={session}
      />
      {navigationMenuToggle ? (
        <BottomNavigation session={session} signOut={signOut} signIn={signIn} />
      ) : (
        ''
      )}
    </>
  );
};

export default Navigation;
