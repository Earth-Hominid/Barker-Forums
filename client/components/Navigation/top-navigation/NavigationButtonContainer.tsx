import Link from 'next/link';

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
  signOut,
  session,
  signIn,
}) => {
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
              <Link href="/dashboard">
                <div className="text-xs flex-1">
                  <a>
                    <p className="truncate">{session?.user?.name}</p>
                    <p className="text-gray-400">is awesome!</p>
                  </a>
                </div>
              </Link>
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
