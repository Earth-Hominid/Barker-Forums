import LogoContainer from './top-navigation/LogoContainer';
import DropdownContainer from './top-navigation/DropdownContainer';
import NavigationButtonContainer from './top-navigation/NavigationButtonContainer';

import { HeaderContainer } from './Styles';

const Navigation = () => {
  return (
    <>
      <HeaderContainer>
        <LogoContainer />
        <DropdownContainer />
        <NavigationButtonContainer />
      </HeaderContainer>
    </>
  );
};

export default Navigation;
