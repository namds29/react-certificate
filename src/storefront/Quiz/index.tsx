import { useLocation } from "react-router-dom";
import { QuizProvider } from "./context/quiz-context";
import QuizList from "./features/QuizList";
import QuizResult from "./features/QuizResult";

const Quiz = () => {
  const location = useLocation();
  console.log(location);
  return (
    <QuizProvider>
      {location.pathname === "/" ? <QuizList /> : <QuizResult />}
    </QuizProvider>
  );
};

export default Quiz;
