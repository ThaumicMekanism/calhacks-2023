import { Provider } from 'react-redux';
import { store } from "../store/store";
import "../pages/globals.css";
import HomePage from "../pages/homepage"
import Content from "../pages/ content";
import Selection from "../pages/selection";
import Navbar from '../components/navbar';
import { useState } from 'react';
import { useAppSelector, useAppDispatch } from '../store/hooks';
import { updateRender } from '../store/authSlice';

export default function Home() {
  const [render, setRender] = useState<string | null>("home");
  // const { render } = useAppSelector(state => state.flashy)
  // const dispatch = useAppDispatch();

  // function renderBtns() {
  //   if (page !== null) return null;

  //   return (
  //     <>
  //       <button type='button' onClick={() => setPage("cards")} style={{ color: "purple "}}>
  //         cards
  //       </button>
  //       <button type='button' onClick={() => setPage("home")} style={{ color: "purple "}}>
  //         home
  //       </button>
  //       <button type='button' onClick={() => setPage("selection")} style={{ color: "purple "}}>
  //         selection
  //       </button>
  //     </>
  //   )
  // }
  // function renderCards() {
  //   if (page !== "cards") return null;
  //   return (
  //     <Content />
  //   )
  // }
  // function renderHome() {
  //   if (page !== "home") return null;
  //   return (
  //     <HomePage />
  //   )
  // }
  // function renderSelection() {
  //   if (page === "cards" || page === "home") return null
  //   return (
  //     <Selection />
  //   )
  // }

  const renderPage = () => {
    if (render === "home") {
      return (
        <HomePage render={render} setRender={setRender} />
      )
    }
    if (render === "selection") {
      return (
        <Selection render={render} setRender={setRender}/>
      )
    }
    if (render === "flashcards") {
      return (
        <Content render={render} setRender={setRender} />
      )
    }
  }
  return (
    <Provider store={store}>
      <Navbar/>
        <div id="render-app-container">
          {/* {renderBtns()}
          {renderHome()}
          {renderCards()}
          {renderSelection()} */}
          {renderPage()}
        </div>
    </Provider>
  )
}
