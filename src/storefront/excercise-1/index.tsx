import { useLocation } from "react-router-dom";

import InputComponent from "./features/InputComponent";
import { LocalStorageProvider } from "./context/LocalStorateContext";
import OtherComponent from "./features/OtherComponent";

const Excercise1 = () => {
  const location = useLocation();
  return (
    <LocalStorageProvider>
      <InputComponent />
      <OtherComponent />
    </LocalStorageProvider>
  );
};

export default Excercise1;
