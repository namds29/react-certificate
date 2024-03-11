import { createContext, useState } from "react";

interface Props {
  listAnswer: string[];
  listQuestion: Questions[] | undefined;
  setListAnswer: React.Dispatch<React.SetStateAction<string[]>>;
  setListQuestion: React.Dispatch<React.SetStateAction<Questions[] | undefined>>;
  //   setSearchByName: React.Dispatch<React.SetStateAction<string>>;
}
export const QuizContext = createContext<Props>({
  listAnswer: [],
  listQuestion: [],
  setListAnswer: () => {},
  setListQuestion: () => {},
});

export const QuizProvider = ({ children }: { children: React.ReactNode }) => {
  const [listAnswer, setListAnswer] = useState<string[]>([]);
  const [listQuestion, setListQuestion] = useState<Questions[] | undefined>([]);
  return (
    <QuizContext.Provider
      value={{ listAnswer, listQuestion, setListAnswer, setListQuestion }}
    >
      {children}
    </QuizContext.Provider>
  );
};
