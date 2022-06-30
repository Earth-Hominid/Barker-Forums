import Image from 'next/image';
import { ImageContainer } from './Styles';

const Spinner = require('../../public/icons/spinner.png');

const LoadingSpinner = () => {
  return (
    <>
      <div className="flex justify-center items-center  inset-0 fixed bg-white">
        <ImageContainer>
          <Image
            src={Spinner}
            alt="spinner logo"
            layout="fill"
            objectFit="contain"
            priority={true}
          />
        </ImageContainer>
      </div>
    </>
  );
};

export default LoadingSpinner;
