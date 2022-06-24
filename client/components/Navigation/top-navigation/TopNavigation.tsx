import LogoContainer from './LogoContainer';
import DropdownContainer from './DropdownContainer';
import NavigationButtonContainer from './NavigationButtonContainer';

import { HeaderContainer } from './Styles';

const Navigation = ({ handleNavigationMenuClick, navigationMenuToggle }) => {
  return (
    <>
      <HeaderContainer>
        <LogoContainer />
        <DropdownContainer />
        <NavigationButtonContainer
          handleNavigationMenuClick={handleNavigationMenuClick}
          navigationMenuToggle={navigationMenuToggle}
        />
      </HeaderContainer>
    </>
  );
};

export default Navigation;
