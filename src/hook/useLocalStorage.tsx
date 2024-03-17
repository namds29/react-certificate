import { useCallback, useContext, useEffect } from "react";
import { LocalStorageContext } from "../storefront/excercise-1/context/LocalStorateContext";

const getLocalStorageValue = (key: string, defaultValue: string) => {
  const value = localStorage.getItem(key);
  console.log(value)
  if (!value) return defaultValue;
  try {
    return JSON.parse(value);
  } catch (error) {
    return value;
  }
};

const useLocalStorage = (key: string, defaultValue: string) => {
  const { value, setValue } = useContext(LocalStorageContext);
  const setLocalStorageValue = (key: string, data: string) => {
    localStorage.setItem(key, JSON.stringify(data));
    setValue(value);
  };

  const handleSetValue = useCallback(
    (newValue: string) => {
      setLocalStorageValue(key, newValue);
      setValue(newValue);
    },
    [key, setValue]
  );
  useEffect(() => {
    //check refresh to set default value
    if (key) {
      const value = getLocalStorageValue(key, defaultValue);
      setValue(value);
    }
  }, [key, defaultValue]);

  useEffect(() => {
    const localStorageChangeHandler = (e: any) => {
      console.log(e.key);
      // clear all
      if (e.key === null) setValue(defaultValue);
      // clear item
      if (e.key !== key) return;
      // // refresh value of context
      let newValue;
      try {
        if (!e.newValue) {
          newValue = defaultValue;
        } else {
          newValue = JSON.parse(e.newValue);
        }
      } catch (error) {
        newValue = e.newValue;
      }
      setValue(newValue);
    };
    window.addEventListener("storage", localStorageChangeHandler);
    return () => {
      window.removeEventListener("storage", localStorageChangeHandler);
    };
  }, [key, defaultValue, setValue]);

  return { value, handleSetValue };
};

export default useLocalStorage;
