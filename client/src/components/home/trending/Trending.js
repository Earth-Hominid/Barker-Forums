import dogRetriever from '../../../assets/images/articles/ret.jpeg';
import dogDrink from '../../../assets/images/articles/drink.png';
import dogRun from '../../../assets/images/articles/dogRun.jpeg';
import Paw from '../../../assets/icons/paw.svg';
import Flower from '../../../assets/icons/flower.svg';
import Drop from '../../../assets/icons/drop.svg';

const Trending = () => {
  return (
    <>
      <div className="flex flex-col pt-4 mx-6 sm:mx-2">
        <div className="text-xs mb-1">Trending Today</div>

        <div className="flex flex-wrap sm:flex-nowrap align-items justify-center">
          <div
            className="
          relative 
          bg-stone-700 
          shadow-md 
          sm:max-w-[200px] 
          max-w-[250px] 
          p-3 
          rounded-md 
          mx-1 
          my-1"
          >
            <img
              src={dogRetriever}
              alt="labrador"
              className="
              absolute 
              inset-0 
              h-full 
              w-full 
              object-cover
              overflow-hidden
              rounded-md
              opacity-40
              min-h-[80px]"
            />
            <div className="relative">
              <h2 className="text-sm text-white font-bold mt-1">Rank 2022</h2>
              <h3 className="text-[12px] text-white font-semi-bold">
                Top breed is still Retrievers (Labrador)
              </h3>
              <div className="flex flex-row align-items">
                <img src={Paw} alt="paw" className="mt-1 w-4" />
                <p className="text-white pt-2 pl-1 text-[9px]">b/world news</p>
              </div>
            </div>
          </div>

          <div className=" relative shadow-md bg-stone-700 p-3 sm:max-w-[200px] max-w-[250px] min-h-[80px] rounded-md mx-1 my-1 ">
            <img
              src={dogDrink}
              alt="puppy drinking"
              className="
              absolute 
              inset-0 
              h-full 
              w-full 
              object-cover
              overflow-hidden
              rounded-md
              opacity-40"
            />
            <div className="relative">
              <h2 className="text-sm font-bold mt-1 text-white">Hygiene</h2>
              <h3 className="text-xs text-white font-semi-bold">
                Water bowl should be changed at least once daily.
              </h3>
              <div className="flex flex-row align-items">
                <img src={Drop} alt="paw" className="mt-1 w-4" />
                <p className="text-white pt-2 pl-1 text-[9px]">b/hydration</p>
              </div>
            </div>
          </div>

          <div className="relative min-h-[80px] shadow-md bg-stone-700 sm:max-w-[200px] max-w-[250px] p-3 rounded-md mx-1 my-1">
            <img
              src={dogRun}
              alt="dog race"
              className="
              absolute 
              inset-0 
              h-full 
              w-full 
              object-cover
              overflow-hidden
              rounded-md
              opacity-40"
            />
            <div className="relative">
              <h2 className="text-sm font-bold mt-1 text-white">
                Cardiovascular
              </h2>
              <h3 className="text-xs text-white font-semi-bold">
                Recommended daily exercise for dogs is 30 minutes to 2 hours
              </h3>
              <div className="flex flex-row align-items">
                <img src={Flower} alt="paw" className="mt-1 w-4" />
                <p className="text-white pt-2 pl-1 text-[9px]">
                  b/health and exercise
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Trending;
