import { Provider } from 'react-redux';
import { store } from "../store/store";
import Navbar from "../components/navbar";
import "../pages/globals.css";

export default function Home() {
  return (
    <Provider store={store}>
      <div>
        <Navbar/>
      </div>
    </Provider>
  )
}
