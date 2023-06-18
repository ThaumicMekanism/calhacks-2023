import React from 'react';
import { useAppSelector } from '../store/hooks';
import Flashcards from './flashcards';

const List = (): JSX.Element => {
  const { aiData } = useAppSelector(state => state.flashy);
  return (
    <div id="list-container">
      {aiData.length > 0 ? aiData.map((entry, idx) => {
        return <Flashcards entry={entry} key={idx}></Flashcards>
      }) : <p style={{ fontSize: "30px" }}>Generating Flashcards...</p>}
    </div>
  )
};

export default List;