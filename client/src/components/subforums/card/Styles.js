import tw from 'tailwind-styled-components';

export const CardSection = tw.section`
 pt-4 mx-6 sm:mx-2
`;

export const SectionHeader = tw.h2`
text-xs
mb-1
`;

export const CardContainer = tw.div`
sm:flex w-full mt-1 sm:justify-center
`;

export const Card = tw.div`
border-solid
border-stone-300
border-x
border-y
bg-white
w-full
flex
flex-row
sm:max-w-lg
shadow-md
rounded-sm
cursor-pointer
hover:border-stone-900
hover:border-dotted
hover:border-2"   
`;

export const SmallTitle = tw.h2`
ml-1 mt-1 text-[5%] lowercase
`;

export const LargeTitle = tw.h1`
pt-1 pl-2 text-lg
`;

export const ContentParagraph = tw.p`
pt-1 pl-2 pb-2
`;

export const FooterContainer = tw.div`
flex 
flex-row 
items-center 
justify-start
`;

export const FooterText = tw.p`
text-[#605649] font-bold text-[8px]
`;

export const FooterIcons = tw.img`
h-6 w-6
`;
