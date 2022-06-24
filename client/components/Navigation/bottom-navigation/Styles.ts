import tw from 'tailwind-styled-components';

export const BottomNavigationMenu = tw.div`
 flex 
 justify-between 
 flex-col 
 w-full
 md:hidden
 bg-white
`;

export const ThemeSwitcher = tw.div`
  m-2
`;

export const ThemeButton = tw.button`
  flex 
  items-center
  text-sm 
  font-semibold 
  text-stone-600 
  py-1 
  px-2 
  hover:bg-stone-100 
  cursor-pointer
  rounded-md
  duration-150
  transition
  ease-in-out
`;

export const IconWrap = tw.div`
  h-5
  w-5 
  mr-1
`;

export const NavigationMenu = tw.div``;
