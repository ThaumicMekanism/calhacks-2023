import { Provider } from 'react-redux';
import { store } from "../store/store";
import "../pages/globals.css";
import HomePage from "../pages/homepage"
import Content from "../pages/ content";
import Navbar from '../components/navbar';
import { useState } from 'react';

export default function Home() {
  const [page, setPage] = useState<string | null>(null);
  function renderBtns() {
    if (page !== null) return null;

    return (
      <>
        <button type='button'onClick={() => setPage("cards")}>
          cards
        </button>
        <button type='button' onClick={() => setPage("home")}>
          home
        </button>
      </>
    )
  }
  function renderCards() {
    if (page !== "cards") return null;

    return (
      <Content />
    )
  }
  function renderHome() {
    if (page !== "home") return null;

    return (
      <HomePage />
    )
  }
  return (
    <Provider store={store}>
        {renderBtns()}
        {renderHome()}
        {renderCards()}
    </Provider>
  )
}
