import "./App.scss";
import { Route, Routes } from "react-router-dom";
import Excercise1 from "./storefront/excercise-1";
import Exercise2 from "./storefront/excercise-2";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Excercise1 />} />
      <Route path="/ex2" element={<Exercise2 />} />
    </Routes>
  );
}

export default App;
