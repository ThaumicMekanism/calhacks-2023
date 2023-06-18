import Link from "next/link";
import React from 'react';
import { useAppSelector, useAppDispatch } from '../store/hooks';
import { } from '../store/authSlice';
import List from "../components/list";

const Content = (): React.JSX.Element => {
  return (
    <List />
  )
}

export default Content;