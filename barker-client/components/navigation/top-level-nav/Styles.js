import tw from 'tailwind-styled-components';

export const TopNavigationWrap = tw.nav`
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

export const NavButtonContainer = tw.div`
    justify-end
    w-full
    hidden
    md:flex
`;

export const NavLinkDark = tw.a`
    rounded-3xl
    px-2.5
    py-1
    mx-1
    text-white
    bg-sky-500
    font-medium 
    hover:bg-stone-300 
    hover:text-stone-900
    border-[1px]
    border-sky-500
    hover:border-[1px]
    hover:border-stone-700
    transition 
    duration-150
    ease-in-out
`;

export const NavLinkLight = tw.a`
    rounded-3xl
    px-2.5
    py-1
    mx-1
    text-stone-700 
    font-medium 
    hover:bg-stone-300 
    hover:text-stone-900
    border-[1px]
    border-stone-700
    transition 
    duration-150
    ease-in-out
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
