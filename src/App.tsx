import "./App.scss";
import { Route, Routes } from "react-router-dom";
import Excercise1 from "./storefront/excercise-1";
import Exercise2 from "./storefront/excercise-2";
import Exercise3 from "./storefront/excercise-3";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Excercise1 />} />
      <Route path="/ex2" element={<Exercise2 />} />
      <Route path="/ex3" element={<Exercise3 />} />
    </Routes>
  );
}

export default App;
