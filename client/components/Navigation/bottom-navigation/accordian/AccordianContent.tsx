import Image from 'next/image';
import Link from 'next/link';
import { AccordianContentContainer, AccordianText } from './Styles';

const AccordianContent = ({ props }) => {
  return (
    <AccordianContentContainer>
      {props.datapoints.map((datapoint) => (
        <div key={datapoint.id}>
          <Link href={datapoint.url}>
            <a>
              <AccordianText>{datapoint.name}</AccordianText>
            </a>
          </Link>
        </div>
      ))}
    </AccordianContentContainer>
  );
};

export default AccordianContent;
