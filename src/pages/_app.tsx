import { Provider } from 'react-redux';
import { store } from "../store/store";
import Navbar from "../components/navbar";
import Content from "../components/content"
import "../pages/globals.css";

export default function Home() {
  return (
    <Provider store={store}>
      <div>
        <Navbar/>
        <Content/>
      </div>
    </Provider>
  )
}
