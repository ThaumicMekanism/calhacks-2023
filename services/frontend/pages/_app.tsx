import { Provider } from 'react-redux';
import { store } from "../store/store";
import "../pages/globals.css";
import HomePage from "../pages/homepage"
import Content from "../pages/ content";
import Selection from "../pages/selection";
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
        <button type='button' onClick={() => setPage("selection")}>
          selection
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
  function renderSelection() {
    if (page === "cards" || page === "home") return null

    return (
      <Selection />
    )
  }
  return (
    <Provider store={store}>
      <Navbar/>
        <div id="render-app-container">
          {renderBtns()}
          {renderHome()}
          {renderCards()}
          {renderSelection()}
        </div>
    </Provider>
  )
}
