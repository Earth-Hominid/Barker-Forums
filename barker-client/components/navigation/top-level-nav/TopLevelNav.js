import Link from 'next/link';
import Image from 'next/image';
import LightLogo from '../../../public/logos/logo-light.png';
import {
  TopNavigationWrap,
  HamburgerContainer,
  HamburgerButton,
  NavButtonContainer,
  NavLinkDark,
  NavLinkLight,
} from './Styles';

const TopLevelNavigation = ({
  handleNavigationToggleClick,
  toggleNavigation,
}) => {
  return (
    <TopNavigationWrap>
      <Link href={'/'}>
        <a>
          <div
            aria-label="Barker Homepage"
            className="cursor-pointer w-24 sm:w-28 md:w-32 p-1"
          >
            <Image src={LightLogo} alt="barker logo" />
          </div>
        </a>
      </Link>

      <NavButtonContainer>
        <NavLinkLight href={'/login'}>Already a member?</NavLinkLight>
        <NavLinkDark href={'/signup'}>Sign up</NavLinkDark>
      </NavButtonContainer>
      <HamburgerContainer>
        <HamburgerButton
          onClick={handleNavigationToggleClick}
          aria-expanded={true}
        >
          {toggleNavigation ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-stone-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-stone-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </HamburgerButton>
      </HamburgerContainer>
    </TopNavigationWrap>
  );
};

export default TopLevelNavigation;
