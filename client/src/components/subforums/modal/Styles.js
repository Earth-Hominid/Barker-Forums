import tw from 'tailwind-styled-components';

export const SectionHolder = tw.section`
  p-10
  bg-stone-100
`;

export const MainContainer = tw.div`
  h-full 
  w-full 
  outline-none 
  overflow-x-hidden 
  overflow-y-auto"
  tabIndex="-1
`;

export const SecondaryContainer = tw.div`
bg-white 
rounded-lg 
border-2 
border-dotted 
border-indigo-700 
relative shadow-lg 
flex 
flex-col 
w-full
`;

export const HeaderContainer = tw.div`
flex 
flex-shrink-0 
items-center 
justify-between 
p-4 
border-dotted 
border-b 
border-stone-700
`;

export const HeaderText = tw.h3`
text-xl 
font-medium 
leading-normal 
text-gray-800"
`;
