import { useState } from 'react';
import TopNavigation from './top-navigation/TopNavigation';
import BottomNavigation from './bottom-navigation/BottomNavigation';

const Navigation = () => {
  const [navigationMenuToggle, setNavigationMenuToggle] = useState(false);

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
      />
      {navigationMenuToggle ? (
        <BottomNavigation navigationMenuToggle={navigationMenuToggle} />
      ) : (
        ''
      )}
    </>
  );
};

export default Navigation;
