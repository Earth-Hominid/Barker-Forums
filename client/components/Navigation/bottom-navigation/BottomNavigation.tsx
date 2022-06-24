import { useState } from 'react';
import { SunIcon, MoonIcon } from '@heroicons/react/outline';
import MenuAccordian from './MenuAccordian';

import {
  BottomNavigationMenu,
  ActionButtonHolder,
  ThemeButton,
  IconWrap,
  NavigationMenu,
  LogoutButtonLink,
  ButtonLink,
  SignUpButtonLink,
} from './Styles';

const BottomNavigation = ({ signIn, signOut, session }) => {
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
      <ActionButtonHolder>
        <ThemeButton>
          <IconWrap>
            <SunIcon />
          </IconWrap>
          Theme
        </ThemeButton>
        {session ? (
          <>
            <LogoutButtonLink onClick={signOut}>Logout</LogoutButtonLink>
          </>
        ) : (
          <>
            <ButtonLink>Demo Account</ButtonLink>
            <SignUpButtonLink onClick={signIn}>Sign in</SignUpButtonLink>
          </>
        )}
      </ActionButtonHolder>
      <NavigationMenu></NavigationMenu>
    </BottomNavigationMenu>
  );
};

export default BottomNavigation;
