import { useContext, useState } from "react";
import { Question } from "../../../components/Question";
import { QuizContext } from "../context/quiz-context";
import { Link } from "react-router-dom";

const QuizResult = () => {
  const [shuffleAnswers, setShuffleAnswers] = useState<boolean>(false);

  const { listAnswer, setListAnswer, listQuestion, setListQuestion } =
    useContext(QuizContext);
  const handleCreateQuiz = async () => {
    setListAnswer([]);
    setListQuestion([]);
    setShuffleAnswers(true);
  };
  console.log(listQuestion);

  const correctAnswers =
    listQuestion && listQuestion.map((question) => question.correct_answer);
  const matchingCount = listAnswer.reduce((count, answer) => {
    if (correctAnswers && correctAnswers.includes(answer)) {
      return count + 1;
    }
    return count;
  }, 0);

  return (
    <main>
      <h1 className="text-center">Result</h1>
      <section id="question" className="text-left mt-6">
        {listQuestion &&
          listQuestion.map((item: Questions) => (
            <Question item={item} shuffleAnswers={shuffleAnswers} />
          ))}
      </section>
      <div
        className={`w-1/2 mt-6 p-4 ml-64 text-center ${
          (matchingCount === 0 || matchingCount === 1) && "bg-red-300"
        }
      ${(matchingCount === 2 || matchingCount === 3) && "bg-yellow-400"}
      ${(matchingCount === 4 || matchingCount === 5) && "bg-green-400"}
    `}
      >
        Your score is {matchingCount} out of 5
      </div>
      <Link to="/">
        <button
          className="w-1/3 text-white bg-gray-500 rounded p-2 mt-5"
          onClick={() => handleCreateQuiz()}
        >
          Create a new quiz
        </button>
      </Link>
    </main>
  );
};

export default QuizResult;
