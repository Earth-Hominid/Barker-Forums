import tw from 'tailwind-styled-components';

export const TopNavigationWrap = tw.div`
    h-16 
    whitespace-nowrap 
    w-full 
    flex 
    flex-row 
    items-center 
    sticky 
    top-0 
    z-50
`;

export const HamburgerContainer = tw.div`
    flex 
    justify-end 
    w-full 
    my-2 
    mx-4 
    md:hidden
`;

export const HamburgerButton = tw.button`
    flex 
    items-center 
    justify-center 
    h-8 
    w-8 
    hover:cursor-pointer 
    hover:bg-stone-100 
    transition
    rounded-md 
    ease-in-out
    duration-300 
`;
