import tw from 'tailwind-styled-components';

export const TopSection = tw.section`
 bg-stone-300 
 rounded-md p-2`;

export const PostHolder = tw.div`
 flex items-center space-x-3
`;

export const ContentHolder = tw.div`
 flex flex-col py-2
`;

export const PostInput = tw.input`
  flex-1
  rounded-md
  bg-stone-50
  p-2
  pl-5
  outline-none
`;

export const IconHolder = tw.div`
  h-8 
  w-8 
  p-1 
  text-stone-600 
  cursor-pointer 
  hover:bg-stone-100 
  rounded-full
  transition
  duration-300
  ease-in-out
`;

export const SecondaryInput = tw.input`
  rounded-md 
  m-2 
  flex-1 
  bg-stone-50 
  p-2 
  outline-none 
  text-stone-700
`;

export const ButtonHolder = tw.div`
  flex 
  items-center 
  justify-center 
  m-2
`;

export const PrimaryButton = tw.button`
text-white
  font-bold
  w-full 
  sm:w-96 
  rounded-full 
  bg-blue-400 
  p-2 
  text-xl
  sm:text-2xl
  font-[Rubik]
`;
