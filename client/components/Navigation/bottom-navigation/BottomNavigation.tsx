import { useState } from 'react';
import { SunIcon, MoonIcon } from '@heroicons/react/outline';
import MenuAccordian from './MenuAccordian';

import {
  BottomNavigationMenu,
  ThemeSwitcher,
  ThemeButton,
  IconWrap,
  NavigationMenu,
} from './Styles';

const BottomNavigation = () => {
  const [lightTheme, setLightTheme] = useState(true);

  const handleLightThemeToggle = () => {
    if (lightTheme) {
      setLightTheme(false);
    } else {
      setLightTheme(true);
    }
  };
  const handleThemeButtonClick = () => {
    handleLightThemeToggle();
  };

  return (
    <BottomNavigationMenu>
      <ThemeSwitcher>
        <ThemeButton>
          <IconWrap>
            <SunIcon />
          </IconWrap>
          Theme
        </ThemeButton>
      </ThemeSwitcher>
      <NavigationMenu></NavigationMenu>
    </BottomNavigationMenu>
  );
};

export default BottomNavigation;
