import useLocalStorage from "../../../hook/useLocalStorage";

const InputComponent = () => {
  const { value, handleSetValue } = useLocalStorage(
    import.meta.env.VITE_API_LOCAL_KEY,
    ""
  );
  console.log(value);
  return (
    <div className="text-left">
      <p>Name</p>
      <input
        id="name"
        className="border p-4"
        type="text"
        value={value}
        onChange={(e: any) => handleSetValue(e.target.value)}
      />
    </div>
  );
};

export default InputComponent;
