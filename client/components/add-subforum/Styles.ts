import tw from 'tailwind-styled-components';

export const PageTitle = tw.h1`
  text-xl text-center m-2 font-bold text-stone-600 font-[montserrat]

`;

export const TopSection = tw.section`
 bg-stone-300
 rounded-md p-2 mt-5`;

export const ModalContainer = tw.div`
  flex items-center space-x-3
 `;

export const ContentHolder = tw.div`
 flex flex-col py-2
`;

export const SubforumInput = tw.input`
  flex-1
  rounded-md
  bg-stone-50
  p-2
  pl-5
  outline-none
  text-stone-700
`;

export const SecondaryInput = tw.input`
  flex-1 
  rounded-md 
  bg-stone-50 
  p-2
   pl-5
  m-2
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
  bg-blue-500 
  p-2 
  text-xl
  sm:text-2xl
  font-[montserrat]
  hover:bg-stone-50
  hover:border-blue-500
  border-2
  border-blue-500
  transition
  duration-300
  ease-in-out
  hover:text-blue-500
`;
