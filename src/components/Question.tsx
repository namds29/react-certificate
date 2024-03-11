import { useContext, useMemo, useState } from "react";
import { DecodedText } from "./DecodedText";
import { QuizContext } from "../storefront/Quiz/context/quiz-context";
import { useLocation } from "react-router-dom";

interface QuestionProps {
  item: Questions;
  shuffleAnswers: boolean;
}
export const Question = ({ item, shuffleAnswers }: QuestionProps) => {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const location = useLocation();
  const { listAnswer, setListAnswer } = useContext(QuizContext);
  const shuffledAnswers = useMemo(() => {
    return [...item.incorrect_answers, item.correct_answer].sort(
      () => Math.random() - 0.5
    );
  }, [item, shuffleAnswers]);

  const handleAnswerClick = (e: any, answer: string) => {
    e.preventDefault();
    if (selectedAnswer === answer) {
      setSelectedAnswer(null); // Deselect answer if already selected
      setListAnswer((prevAnswers) =>
        prevAnswers.filter((item) => item !== answer)
      );
    } else {
      setSelectedAnswer(answer); // Select the answer
      const arrChoice = [...item.incorrect_answers, item.correct_answer];
      setListAnswer((prevAnswers) => {
        // Remove previous answer if exists
        const filteredAnswers = prevAnswers.filter(
          (item) => !arrChoice.includes(item)
        );
        return [...filteredAnswers, answer];
      });
    }
  };
  return (
    <div key={item.question} className="mt-4">
      <div className="font-bold">
        <DecodedText encodedText={item.question} />
      </div>
      <div className="flex gap-6">
        {shuffledAnswers.map((answer, index) => (
          <button
            className={`border border-green-500 px-3 py-2 rounded ${
              selectedAnswer === answer ||
              (location.pathname === "/result" &&
                answer === item.correct_answer)
                ? "bg-green-500 text-white"
                : ""
            }
            ${
              location.pathname === "/result" &&
              listAnswer.includes(answer) &&
              answer !== item.correct_answer
                ? "bg-red-500 text-white"
                : ""
            }
            `}
            key={index}
            onClick={(e) => handleAnswerClick(e, answer)}
          >
            <DecodedText encodedText={answer} />
          </button>
        ))}
      </div>
    </div>
  );
};
