import React from "react";
import styles from "../storefront/excercise-3/index.module.scss";

const FilterOptions = React.memo(
  ({
    options,
    highlightText,
    onChangeOption,
  }: {
    options: string[];
    highlightText: string;
    onChangeOption: any;
  }) => {
    // refer: https://stackoverflow.com/questions/30599425/javascript-how-to-add-bold-strong-effect-to-certain-words-in-a-given-string
    const getHighlightOptionText = (option: string) => {
      return option.replace(
        new RegExp(`(${highlightText})`, "ig"),
        `<b>$1</b>`
      );
    };

    return (
      <>
        {options.map((option: any) => (
          <span
            key={`filter-option-${option}`}
            className={styles.filterInputOption}
            dangerouslySetInnerHTML={{
              __html: `${getHighlightOptionText(option)}`,
            }}
            onClick={() => onChangeOption(option)}
          />
        ))}
      </>
    );
  }
);

export default FilterOptions;
