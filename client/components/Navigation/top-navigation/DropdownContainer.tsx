import { HomeIcon, ChevronDownIcon } from '@heroicons/react/solid';
import { HomeContainer, HomeText } from './Styles';

const DropdownContainer = () => {
  return (
    <>
      <HomeContainer>
        <HomeIcon className="text-stone-600 w-5 h-5 md:h-6 md:w-6" />
        <HomeText>Dog house</HomeText>
        <ChevronDownIcon className="w-5 h-5 text-stone-600" />
      </HomeContainer>
    </>
  );
};

export default DropdownContainer;
