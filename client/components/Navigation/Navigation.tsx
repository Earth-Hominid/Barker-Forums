import Image from 'next/image';
import { useState } from 'react';
import { signIn, useSession, signOut } from 'next-auth/react';
import { BeakerIcon, HomeIcon, ChevronDownIcon } from '@heroicons/react/solid';
import {
  UserIcon,
  FireIcon,
  ChatIcon,
  MenuIcon,
  LibraryIcon,
} from '@heroicons/react/outline';

const LightLogo = require('../../public/logo-light.png');

import {
  HeaderContainer,
  ImageContainer,
  HomeContainer,
  HomeText,
  ButtonContainer,
  HamburgerContainer,
  ExtendedContainer,
  ButtonLink,
  SignUpButtonLink,
  OrangeIconWrap,
  BlueIconWrap,
  CyanIconWrap,
  SkyIconWrap,
} from './Styles';
import { signal } from 'nodemon/lib/config/defaults';

const Navigation = () => {
  const [isShown, setIsShown] = useState(false);
  const { data: session } = useSession();

  return (
    <>
      <HeaderContainer>
        <ImageContainer>
          <Image
            src={LightLogo}
            alt="barker logo"
            layout="fill"
            objectFit="contain"
          />
        </ImageContainer>
        <HomeContainer>
          <HomeIcon className="text-stone-600 w-5 h-5 md:h-6 md:w-6" />
          <HomeText>Dog house</HomeText>
          <ChevronDownIcon className="w-5 h-5 text-stone-600" />
        </HomeContainer>
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
              <ButtonLink onClick={signOut}>
                <div className="text-xs flex-1">
                  <p className="truncate">{session?.user?.name}</p>
                  <p className="text-gray-400">1 Karma</p>
                </div>
              </ButtonLink>
            </>
          ) : (
            <>
              <ButtonLink onClick={signIn}>Already a member?</ButtonLink>
              <SignUpButtonLink>Sign up</SignUpButtonLink>
            </>
          )}

          <HamburgerContainer>
            <MenuIcon className="icon" />
          </HamburgerContainer>
        </ExtendedContainer>
      </HeaderContainer>
    </>
  );
};

export default Navigation;
