import Link from 'next/link';
import { PlusIcon } from '@heroicons/react/solid';
import MenuList from './MenuList';

import { MenuContainer, MenuHeader, ButtonHolder, IconHolder } from './Styles';

const DropdownMenu = () => {
  return (
    <MenuContainer>
      <MenuHeader>Howling Communities</MenuHeader>
      <Link href="/create/howl">
        <ButtonHolder>
          <IconHolder>
            <PlusIcon />
          </IconHolder>
          <p className="ml-1">Create a Community</p>
        </ButtonHolder>
      </Link>
      <MenuList />
    </MenuContainer>
  );
};

export default DropdownMenu;
