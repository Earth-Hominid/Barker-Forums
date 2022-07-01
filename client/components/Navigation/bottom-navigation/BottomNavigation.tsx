import { useState } from 'react';
import Link from 'next/link';
import {
  SunIcon,
  MoonIcon,
  PlusCircleIcon,
  ChatIcon,
  AnnotationIcon,
} from '@heroicons/react/outline';
import MenuAccordian from './accordian/MenuAccordian';
import {
  BottomNavigationMenu,
  ActionButtonHolder,
  ThemeButton,
  IconWrap,
  NavigationMenu,
  LogoutButtonLink,
  ButtonLink,
  SignUpButtonLink,
  CreateSubforumButton,
  CreatePostButton,
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

  const subforumObject = {
    title: 'All howls',
    datapoints: [
      { name: 'Nutrition', id: '1', url: 'subforum/nutrition' },
      { name: 'World News', id: '2', url: 'subforum/worldnews' },
      { name: 'Finance', id: '3', url: 'subforum/finance' },
    ],
  };

  const popularSubforumObject = {
    title: 'Popular howls',
    datapoints: [
      {
        name: 'Programming',
        id: '1',
        url: 'subforum/programming',
      },
      { name: 'CS Careers', id: '1', url: 'subforum/cscareers' },
      { name: 'Programmer Humor', id: '1', url: 'subforum/programmerhumor' },
    ],
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
        {session ? (
          <>
            <Link href="/create/howl">
              <CreateSubforumButton>
                <IconWrap>
                  <AnnotationIcon />
                </IconWrap>
                Howl
              </CreateSubforumButton>
            </Link>
            <Link href="/">
              <CreatePostButton>
                <IconWrap>
                  <ChatIcon />
                </IconWrap>
                Bark
              </CreatePostButton>
            </Link>
          </>
        ) : (
          <></>
        )}
      </ActionButtonHolder>
      <NavigationMenu>
        <MenuAccordian props={popularSubforumObject} />
        <MenuAccordian props={subforumObject} />
      </NavigationMenu>
    </BottomNavigationMenu>
  );
};

export default BottomNavigation;
