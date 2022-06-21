import React from 'react';
import Talk from '../../../assets/icons/talkBubble.svg';
import QuantityAdjuster from './quantity-adjuster/QuantityAdjuster';

const Popular = () => {
  return (
    <>
      <div className="pt-4 mx-6 sm:mx-2">
        <div className="text-xs mb-1">Popular Howls</div>
        <div className="sm:flex w-full mt-1 sm:justify-center">
          <div
            id="container"
            className="
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
          >
            <QuantityAdjuster />

            <div>
              <h2 className="ml-1 mt-1 text-[5%]">
                <strong>b/barker</strong> User Name Posted May 8
              </h2>
              <h1 className="pt-1 pl-2 text-lg">This is the heading.</h1>
              <h2 className="pt-1 pl-2 pb-2">
                This is the content. This is more content.
              </h2>
              <div className="flex flex-row items-center justify-start">
                <img
                  src={Talk}
                  alt="paw"
                  className="p-1 w-8 ml-2 mb-1 hover:bg-sky-400 hover:rounded-2xl"
                />
                <p className="text-[#605649] font-bold text-[8px]">
                  1.2K Barks
                </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 ml-0.5 p-1 mb-1 text-[#605649] hover:bg-sky-400 hover:rounded-3xl hover:text-[#EADFB9]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                  />
                </svg>
                <p className="text-[#605649] font-bold text-[8px]">Barkmark</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Popular;
