import React, { useContext, useEffect, useState } from "react";
import utilsService from "../../../services/utils-service";
import { Question } from "../../../components/Question";
import { QuizContext } from "../context/quiz-context";
import { Link } from "react-router-dom";

const QuizList = () => {
  const [categories, setCategories] = useState<Categories[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string>("");
  const [selectedDifficulties, setSelectedDifficulties] = useState<string>("");

  const [shuffleAnswers, setShuffleAnswers] = useState<boolean>(false);

  const { listAnswer, setListAnswer, listQuestion, setListQuestion } =
    useContext(QuizContext);

  const handleFetchCategories = async () => {
    const res = await utilsService.fetchCategory();
    setCategories(res.trivia_categories);
    setShuffleAnswers(false);
  };
  const handleCreateQuiz = async () => {
    const res = await utilsService.fetchQuestion(
      5,
      selectedCategories,
      selectedDifficulties
    );
    setListAnswer([]);
    setListQuestion(res.results);
    setShuffleAnswers(true);
  };
  useEffect(() => {
    handleFetchCategories();
  }, []);
  return (
    <main>
      <div className="flex gap-6 justify-center">
        <select
          id="categorySelect"
          defaultValue={""}
          className="border border-gray-400 p-4 rounded-xl"
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
            setSelectedCategories(e.target.value)
          }
        >
          <option value="" disabled>
            Select a categories
          </option>
          {categories &&
            categories.map((item: Categories) => (
              <option key={item.id} value={item.id}>
                {item.name}
              </option>
            ))}
        </select>

        <select
          id="difficultySelect"
          defaultValue={""}
          className="border border-gray-400 p-4 rounded-xl"
          onChange={(e) => setSelectedDifficulties(e.target.value)}
        >
          <option value="" disabled>
            Select difficulty
          </option>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>

        <button
          id="createBtn"
          className="border border-gray-400 p-4 rounded-xl hover:bg-slate-400 hover:text-white"
          onClick={handleCreateQuiz}
        >
          Create
        </button>
      </div>
      <section id="question" className="text-left mt-6">
        {listQuestion &&
          listQuestion.map((item: Questions) => (
            <Question item={item} shuffleAnswers={shuffleAnswers} />
          ))}
      </section>
      {listAnswer.length === 5 && (
        <Link to="/result">
          <button className="w-1/3 text-white bg-gray-500 rounded p-2 mt-5">
            Submit
          </button>
        </Link>
      )}
    </main>
  );
};

export default QuizList;
