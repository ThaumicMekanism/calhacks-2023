import Link from "next/link";
import React from 'react';
import { useAppSelector, useAppDispatch } from '../store/hooks';
import { } from '../store/authSlice';
import List from "../components/list";
import Navbar from '../components/navbar';

const Content = (): React.JSX.Element => {
  return (
    <div>
      <Navbar />
      <div id="content-container" className="heroMain flex flex-wrap bg-heroColor">
        <List />
      </div>
    </div>
  )
}

export default Content;