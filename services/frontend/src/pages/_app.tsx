import { Provider } from 'react-redux';
import { store } from "../store/store";
import "../pages/globals.css";
import HomePage from "../pages/homepage"

export default function Home() {
  return (
    <Provider store={store}>
      <div>
        <HomePage/>
      </div>
    </Provider>
  )
}
