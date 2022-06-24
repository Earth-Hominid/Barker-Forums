import tw from 'tailwind-styled-components';

export const AccordianContainer = tw.div`
  mx-1
  border-solid
  border-t-[0.1rem]
  border-[#e2e8f0] 
  py-[0.5rem]
`;

export const AccordianSummary = tw.summary`
  flex
  items-center
  h-[2rem]
  cursor-pointer
  list-none
  ml-4
  mr-2
  text-color-[#475569]
`;

export const SummaryTitle = tw.h2`
  text-zinc-600
  font-regular
  flex
  flex-1
`;

export const AccordianContentContainer = tw.div`
  my-[0.5rem]
  ml-[1.5rem]
  break-words
  cursor-pointer
  `;

export const AccordianText = tw.p`
  p-2
  text-sm
  tracking-normal
  leading-6
  hover:bg-blue-200
  rounded-md
`;

export const IconHolder = tw.div`
h-5 w-5 text-zinc-600 hover:bg-blue-100 rounded-3xl
`;
