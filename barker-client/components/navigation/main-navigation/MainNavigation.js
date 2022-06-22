import { useState } from 'react';
import TopLevelNavigation from '../top-level-nav/TopLevelNav';
import { NavigationContainer } from './Styles';

const MainNavigation = () => {
  const [toggleNavigation, setToggleNavigation] = useState(false);

  const toggleNavigationButton = () => {
    if (toggleNavigation) {
      setToggleNavigation(false);
    } else {
      setToggleNavigation(true);
    }
  };

  const handleNavigationToggleClick = () => {
    toggleNavigationButton();
  };

  return (
    <NavigationContainer>
      <TopLevelNavigation
        handleNavigationToggleClick={handleNavigationToggleClick}
        toggleNavigation={toggleNavigation}
      />
    </NavigationContainer>
  );
};

export default MainNavigation;
