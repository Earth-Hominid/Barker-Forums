import Image from 'next/image';
import Link from 'next/link';

const LightLogo = require('../../../public/logo-light.png');

import { ImageContainer } from './Styles';

const LogoContainer = () => {
  return (
    <>
      <ImageContainer>
        <Link href={'/'}>
          <a>
            <div aria-label="Barker Homepage" className="ml-2">
              <Image
                src={LightLogo}
                alt="barker logo"
                layout="fill"
                objectFit="contain"
              />
            </div>
          </a>
        </Link>
      </ImageContainer>
    </>
  );
};

export default LogoContainer;
