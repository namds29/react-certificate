import "./App.scss";
import { Route, Routes } from "react-router-dom";
import Quiz from "./storefront/excercise-1";
import Excercise1 from "./storefront/excercise-1";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Excercise1 />} />
      <Route path="/result" element={<Quiz />} />
    </Routes>
  );
}

export default App;
