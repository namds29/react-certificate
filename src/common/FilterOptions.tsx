import React from "react";
import styles from "../../../css/filterInput.module.css";

const FilterOptions = React.memo(({
    options, highlightText,
    onChangeOption
}: {options: any[], highlightText: string, onChangeOption: any}) => {

    // refer: https://stackoverflow.com/questions/30599425/javascript-how-to-add-bold-strong-effect-to-certain-words-in-a-given-string
    const getHighlightOptionText = (option: any) => {
        return option.replaceAll(new RegExp(`(${highlightText})`, 'ig'), `<b>$1</b>`)
    }

    return (
        <>
            {
                options.map((option: any) =>
                    <span
                        key={`filter-option-${option}`}
                        className={styles.filterInputOption}
                        dangerouslySetInnerHTML={{ __html: `${getHighlightOptionText(option)}` }}
                        onClick={() => onChangeOption(option)}
                    />
                )
            }
        </>
    );
});

export default FilterOptions;

