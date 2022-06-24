import tw from 'tailwind-styled-components';

export const HeaderContainer = tw.header`
  flex
  bg-white
  shadow-sm
  py-2
  px-2
  sticky
  top-0
  z-50
`;

export const ImageContainer = tw.div`
    relative 
    h-12
    w-24
    md:h-14
    md:w-28
    flex-shrink-0
    cursor-pointer
`;

export const HomeContainer = tw.div`
  flex 
  flex-row 
  items-center 
  mx-6
  lg:min-w-[150px]
  xl:min-w-[200px]
`;

export const HomeText = tw.p`
  flex-1
  hidden
  ml-2
  lg:inline
  text-stone-600
`;

export const ExtendedContainer = tw.div`
  flex 
  items-center 
  w-full 
  flex-row
  flex-1
  space-x-4
  justify-end
  mr-2

`;

export const ButtonContainer = tw.div`
items-center space-x-2 mx-5 hidden md:inline-flex
`;

export const HamburgerContainer = tw.div`
 md:hidden
`;

export const SignUpButtonLink = tw.a`
  hidden md:inline-flex
  border-2
  text-white
  bg-sky-500
  border-sky-500
  px-3
  py-1
  rounded-3xl
  cursor-pointer
  hover:text-sky-600
  hover:bg-sky-50
  hover:border-2
  transition
  duration-300
  ease-in-out
`;

export const LogoutButtonLink = tw.a`
  hidden md:inline-flex
  border-2
  text-white
  bg-rose-500
  border-rose-500
  px-3
  py-1
  rounded-3xl
  cursor-pointer
  hover:text-rose-600
  hover:bg-sky-50
  hover:border-2
  transition
  duration-300
  ease-in-out
`;

export const ButtonLink = tw.a`
  text-stone-700
  hover:text-indigo-600
  hidden 
  md:inline-flex 
  hover:bg-indigo-50 
  px-2 
  py-1 
  rounded-lg
  cursor-pointer
  hover:border-indigo-600
  border-transparent
  border-2
  hover:border-2
  duration-300
  transition
  ease-in-out
`;

export const OrangeIconWrap = tw.div`
  h-9 
  w-6 
  md:w-9 
  cursor-pointer 
  md:p-1 
  md:hover:bg-orange-100
  md:hover:text-orange-600
  rounded-3xl
  text-stone-600
  duration-150
  transition
  ease-in-out
`;

export const CyanIconWrap = tw.div`
  h-9 
  w-6 
  md:w-9 
  cursor-pointer 
  md:p-1 
  md:hover:bg-cyan-100
  md:hover:text-cyan-700
  rounded-md 
  text-stone-600
  duration-150
  transition
  ease-in-out
`;

export const BlueIconWrap = tw.div`
  h-9 
  w-6 
  md:w-9 
  cursor-pointer 
  md:p-1 
  md:hover:bg-blue-100
  md:hover:text-blue-600
  rounded-3xl 
  text-stone-600
  duration-150
  transition
  ease-in-out
`;

export const SkyIconWrap = tw.div`
  h-9 
  w-6 
  md:w-9 
  cursor-pointer 
  md:p-1 
  md:hover:bg-sky-100
  md:hover:text-sky-600
  rounded-md 
  text-stone-600
  duration-150
  transition
  ease-in-out
`;
