import { useContext, useState } from 'react';
import { SiteContent } from '../../../../context/SiteContent';

import Checkmark from '../../../../assets/icons/check.svg';
import HoverCheckmark from '../../../../assets/icons/checkHover.svg';
import Poo from '../../../../assets/icons/poo.svg';
import PooHover from '../../../../assets/icons/pooHover.svg';

const QuantityAdjuster = () => {
  const [postVotes, setPostVotes] = useState(2);
  const [checkmarkHover, setCheckmarkHover] = useState(Checkmark);
  const [pooHover, setPooHover] = useState(Poo);
  const [checkSelected, setCheckSelected] = useState(false);
  const [pooSelected, setPooSelected] = useState(false);
  const [pooClicked, setPooClicked] = useState(false);
  const [checkClicked, setCheckClicked] = useState(false);

  const handleIncreaseClick = (event) => {
    if (!checkSelected && !pooSelected) {
      setCheckSelected(true);
      setCheckClicked(true);
      setPostVotes((postVote) => parseInt(postVote + 1));
      return;
    }
    if (!checkSelected && pooSelected) {
      setCheckSelected(true);
      setCheckClicked(true);
      setPooClicked(false);
      setPooSelected(false);
      setPostVotes((postVotes) => parseInt(postVotes + 2));
    }
    if (checkSelected) {
      return;
    }
  };

  const handleDecreaseClick = () => {
    if (!checkSelected && !pooSelected) {
      setPooSelected(true);
      setPooClicked(true);
      setPostVotes((postVotes) => parseInt(postVotes - 1));
      return;
    }
    if (!pooSelected && checkSelected) {
      setCheckSelected(false);
      setCheckClicked(false);
      setPooSelected(true);
      setPooClicked(true);
      setPostVotes((postVotes) => parseInt(postVotes - 2));
    }
    if (pooSelected) {
      return;
    }
  };

  return (
    <>
      <div
        className="w-8 pt-1 h-100% bg-blue-100
            flex
            flex-col
            justify-start
            items-center"
      >
        {!checkClicked ? (
          <button onClick={handleIncreaseClick}>
            <img
              className="w-5 h-5 mb-1"
              src={checkmarkHover}
              alt="checkmark"
              onMouseEnter={() => {
                setCheckmarkHover(HoverCheckmark);
              }}
              onMouseOut={() => {
                setCheckmarkHover(Checkmark);
              }}
            />
          </button>
        ) : (
          <button>
            <img
              className="w-5 h-5 mb-1"
              src={HoverCheckmark}
              alt="checkmark"
            />
          </button>
        )}

        <p
          className="
          text=[#605649] 
          text-[10px] 
          w-full
          bg-transparent
          font-bold
          text-center
          border-none
          focus:border-none"
        >
          {postVotes}
        </p>
        {!pooClicked ? (
          <button onClick={handleDecreaseClick}>
            <img
              className="h-5 w-5 mt-1"
              src={pooHover}
              alt="downvote"
              onMouseEnter={() => {
                setPooHover(PooHover);
              }}
              onMouseOut={() => {
                setPooHover(Poo);
              }}
            />
          </button>
        ) : (
          <button>
            <img className="h-5 w-5 mt-1" src={PooHover} alt="down vote" />
          </button>
        )}
      </div>
    </>
  );
};

export default QuantityAdjuster;
