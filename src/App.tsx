import "./App.scss";
import { Route, Routes } from "react-router-dom";
import Quiz from "./storefront/Quiz";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Quiz />} />
      <Route path="/result" element={<Quiz />} />
    </Routes>
  );
}

export default App;
