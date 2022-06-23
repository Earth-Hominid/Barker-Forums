import Image from 'next/image';
import {
  BeakerIcon,
  HomeIcon,
  ChevronDownIcon,
  LibraryIcon,
} from '@heroicons/react/solid';
import {
  UserIcon,
  FireIcon,
  ChatIcon,
  MenuIcon,
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
} from './Styles';

const Navigation = () => {
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
            <FireIcon className="icon" />
            <ChatIcon className="icon" />
            <LibraryIcon className="icon" />
            <UserIcon className="icon" />
          </ButtonContainer>

          <ButtonLink>Already a member?</ButtonLink>
          <SignUpButtonLink>Sign up</SignUpButtonLink>
          <HamburgerContainer>
            <MenuIcon className="icon" />
          </HamburgerContainer>
        </ExtendedContainer>
      </HeaderContainer>
    </>
  );
};

export default Navigation;
