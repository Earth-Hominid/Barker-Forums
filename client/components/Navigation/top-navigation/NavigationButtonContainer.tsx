import { useState } from 'react';
import { signIn, useSession, signOut } from 'next-auth/react';
import {
  XIcon,
  UserIcon,
  FireIcon,
  ChatIcon,
  MenuIcon,
  LibraryIcon,
} from '@heroicons/react/outline';

import {
  ButtonContainer,
  HamburgerContainer,
  ExtendedContainer,
  ButtonLink,
  SignUpButtonLink,
  OrangeIconWrap,
  BlueIconWrap,
  SkyIconWrap,
  LogoutButtonLink,
} from './Styles';

const NavigationButtonContainer = ({
  handleNavigationMenuClick,
  navigationMenuToggle,
}) => {
  const { data: session } = useSession();

  return (
    <>
      <ExtendedContainer>
        <ButtonContainer>
          <OrangeIconWrap>
            <FireIcon />
          </OrangeIconWrap>
          <BlueIconWrap>
            <ChatIcon />
          </BlueIconWrap>
          <SkyIconWrap>
            <LibraryIcon />
          </SkyIconWrap>
        </ButtonContainer>

        {session ? (
          <>
            <LogoutButtonLink onClick={signOut}>Logout</LogoutButtonLink>
            <ButtonLink onClick={signOut}>
              <div className="text-xs flex-1">
                <p className="truncate">{session?.user?.name}</p>
                <p className="text-gray-400">is awesome!</p>
              </div>
            </ButtonLink>
          </>
        ) : (
          <>
            <ButtonLink>Demo Account</ButtonLink>
            <SignUpButtonLink onClick={signIn}>Sign in</SignUpButtonLink>
          </>
        )}

        <HamburgerContainer>
          {navigationMenuToggle ? (
            <XIcon className="icon" onClick={handleNavigationMenuClick} />
          ) : (
            <MenuIcon className="icon" onClick={handleNavigationMenuClick} />
          )}
        </HamburgerContainer>
      </ExtendedContainer>
    </>
  );
};

export default NavigationButtonContainer;
