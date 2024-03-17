import InputComponent from "./features/InputComponent";
import { LocalStorageProvider } from "./context/LocalStorateContext";
import OtherComponent from "./features/OtherComponent";

const Excercise1 = () => {
  return (
    <LocalStorageProvider>
      <InputComponent />
      <OtherComponent />
    </LocalStorageProvider>
  );
};

export default Excercise1;
