import Image from 'next/image';
import Link from 'next/link';

const LightLogo = require('../../../public/logo-light.png');

import { ImageContainer } from './Styles';

const LogoContainer = () => {
  return (
    <>
      <Link href={'/'}>
        <a>
          <ImageContainer>
            <Image
              src={LightLogo}
              alt="barker logo"
              layout="fill"
              objectFit="contain"
              priority={true}
            />
          </ImageContainer>
        </a>
      </Link>
    </>
  );
};

export default LogoContainer;
