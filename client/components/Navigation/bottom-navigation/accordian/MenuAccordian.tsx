import { useState } from 'react';
import AccordianContent from './AccordianContent';
import { ChevronDownIcon, ChevronRightIcon } from '@heroicons/react/solid';
import {
  AccordianContainer,
  AccordianSummary,
  SummaryTitle,
  AccordianText,
  IconHolder,
} from './Styles';

const MenuAccordian = ({ props }) => {
  const [accordianOpen, setAccordianOpen] = useState(false);

  const handleAccordianClick = () => {
    if (!accordianOpen) {
      setAccordianOpen(true);
    } else {
      setAccordianOpen(false);
    }
  };

  return (
    <AccordianContainer>
      <details>
        <AccordianSummary onClick={handleAccordianClick}>
          <SummaryTitle>{props.title}</SummaryTitle>
          {accordianOpen ? (
            <IconHolder>
              <ChevronDownIcon />
            </IconHolder>
          ) : (
            <IconHolder>
              <ChevronRightIcon />
            </IconHolder>
          )}
        </AccordianSummary>
        <AccordianContent props={props} />
      </details>
    </AccordianContainer>
  );
};

export default MenuAccordian;
