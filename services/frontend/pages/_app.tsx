import { Provider } from 'react-redux';
import { store } from "../store/store";
import "../pages/globals.css";
import HomePage from "../pages/homepage"
import Content from "../pages/ content";

export default function Home() {
  return (
    <Provider store={store}>
      <div>
        <Content/>
      </div>
    </Provider>
  )
}
