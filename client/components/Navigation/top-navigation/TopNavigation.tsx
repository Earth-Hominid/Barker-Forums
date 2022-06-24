import LogoContainer from './LogoContainer';
import DropdownContainer from './DropdownContainer';
import NavigationButtonContainer from './NavigationButtonContainer';

import { HeaderContainer } from './Styles';

const Navigation = ({
  handleNavigationMenuClick,
  navigationMenuToggle,
  signOut,
  signIn,
  session,
}) => {
  return (
    <>
      <HeaderContainer>
        <LogoContainer />
        <DropdownContainer />
        <NavigationButtonContainer
          handleNavigationMenuClick={handleNavigationMenuClick}
          navigationMenuToggle={navigationMenuToggle}
          signOut={signOut}
          signIn={signIn}
          session={session}
        />
      </HeaderContainer>
    </>
  );
};

export default Navigation;
