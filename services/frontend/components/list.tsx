import React from 'react';
import { useAppSelector } from '../store/hooks';
import Flashcards from './flashcards';

const List = (): JSX.Element => {
  const { dummyData } = useAppSelector(state => state.flashy);
  return (
    <div id="content-container">
      {dummyData.length > 0 ? dummyData.map((entry, idx) => {
        return <Flashcards entry={entry} key={idx}></Flashcards>
      }) : <p>No Flashcards Generated</p>}
    </div>
  )
};

export default List;