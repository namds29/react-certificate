import useLocalStorage from "../../../hook/useLocalStorage";

const OtherComponent = () => {
  const { value } = useLocalStorage("name", "");

  return (
    <p className="text-left mt-4">
      Value component 2: <b>{value}</b>
    </p>
  );
};

export default OtherComponent;
