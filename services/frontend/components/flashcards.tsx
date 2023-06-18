import React from 'react';
import { useAppSelector, useAppDispatch } from '../store/hooks';
import { } from '../store/authSlice';

const Flashcards = ({ entry }: any): React.JSX.Element => {

  const handleFlip = () => {

  }

  return (
    <div className="card-container">
      <div className="card" onClick={() => handleFlip()} >entry</div>
    </div>
  )
}

export default Flashcards;