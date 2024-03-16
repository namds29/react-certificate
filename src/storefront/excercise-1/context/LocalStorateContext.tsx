import {
  Dispatch,
  createContext,
  useState,
} from "react";


interface Props {
  value: string;
  setValue: Dispatch<React.SetStateAction<string>>;
 
}
export const LocalStorageContext = createContext<Props>({
  value: "",
  setValue: () => ""
});

export const LocalStorageProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [value, setValue] = useState<string>("");

  return (
    <LocalStorageContext.Provider
      value={{ value, setValue }}
    >
      {children}
    </LocalStorageContext.Provider>
  );
};
