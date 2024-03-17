import React, { useCallback, useEffect, useState } from "react";

import styles from "../storefront/excercise-3/index.module.scss";
import FilterOptions from "./FilterOptions";
import { User } from "../helper/types";

interface Props {
  data: User[];
  attributeName: string;
  placeholder: string;
  onChangeValue: any;
}
const FilterInput = React.memo(
  ({ data, attributeName, placeholder, onChangeValue }: Props) => {
    const [allOptions, setAllOptions] = useState<string[]>([]);
    const [inputValue, setInputValue] = useState("");
    const [choosedOptions, setChoosedOptions] = useState(new Set());

    useEffect(() => {
      const parseData = () => {
        let key;
        let option;

        const _options = data.map((item) => {
          // console.log(item)
          let attributes = attributeName.split(".");
          let currentItem: any = item;
          key = attributes[0];
          option = currentItem[key];

          for (let i = 1; i < attributes.length; i++) {
            key = attributes[i];
            option = option[key];
          }
          // console.log(item, key, option);
          return option;
        });
        // console.log(_options)
        setAllOptions(_options);
      };

      parseData();
    }, [data, attributeName]);

    const handleChangeInput = (e: any) => {
      setInputValue(e.target.value);
    };

    const onChangeOption = useCallback(
      (option: any) => {
        if (choosedOptions.has(option)) {
          choosedOptions.delete(option);
        } else {
          choosedOptions.add(option);
        }
        setChoosedOptions(new Set(choosedOptions));
        setInputValue("");
        onChangeValue(choosedOptions);
      },
      [onChangeValue, choosedOptions]
    );

    return (
      <div className={styles.filterInput}>
        {/* { Result */}
        {[...choosedOptions].map((option: any) => (
          <span
            key={`filter-result-${option}`}
            className={styles.filterInputOption}
          >
            {option}
          </span>
        ))}

        {/* Input */}
        <input
          type="text"
          value={inputValue}
          placeholder={placeholder}
          onChange={handleChangeInput}
        />

        {/* Options */}
        {inputValue.length !== 0 && (
          <FilterOptions
            options={allOptions.filter((option: any) =>
              option.toLowerCase().includes(inputValue.toLowerCase())
            )}
            highlightText={inputValue.toLowerCase()}
            onChangeOption={onChangeOption}
          />
        )}
      </div>
    );
  }
);

export default FilterInput;
