import "./App.css";
import { Provider } from "react-redux";
import CardList from "./Components/CardList";
import { Routes, Route } from "react-router-dom";
import Cart from "./Components/CART";
import STORE from "./Components/STORE";
function App() {
  return (
    <>
      <Provider store={STORE}>
        <Routes>
          <Route path="/" element={<CardList/>} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Provider>
    </>
  );
}

export default App;