import Link from 'next/link';

import { PlusIcon } from '@heroicons/react/solid';

import {
  MenuContainer,
  MenuList,
  MenuItem,
  MenuHeader,
  ButtonHolder,
  IconHolder,
} from './Styles';

const DropDownMenu = () => {
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

      <MenuList>
        <MenuItem>b/ Dog Nutrition</MenuItem>
      </MenuList>
    </MenuContainer>
  );
};

export default DropDownMenu;
