import React, { useState } from 'react';
import { useAppSelector, useAppDispatch } from '../store/hooks';
import { } from '../store/authSlice';

const Flashcards = ({ entry }: any): React.JSX.Element => {
  const [toggle, setToggle] = useState<boolean | false>(false);
  const [card, setCard] = useState<string | "front">("front");

  console.log('this is entry', entry)

  const handleFlip = (): void => {
    setToggle(!toggle)
    card === "front" ? setCard("back") : setCard("front");
  }

  return (
    // <div className={toggle ? "card-container" : "card-container flip-container"}>
    <div>
      <div className={toggle ? "card" : "card"} onClick={() => handleFlip()} >
        {card === "front" ? entry.question : entry.answer}
      </div>
    </div>
    // </div>
  )
}

export default Flashcards;