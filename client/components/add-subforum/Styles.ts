import tw from 'tailwind-styled-components';

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
`;
