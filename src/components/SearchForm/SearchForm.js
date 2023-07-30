import React, { useCallback, useState } from "react";
import "./SearchForm";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import {
  SEARCH_STRING,
  SHORTS_TOGGLE,
} from "../../utils/localStorageConstants";

function SearchForm({
  onSubmit,
  handleCheckboxToggle,
  noLocalStorage = false,
}) {
  const [searchString, setSearchString] = useState(
    noLocalStorage ? "" : localStorage.getItem(SEARCH_STRING) || "",
  );
  const [shortsToggle, setShortsToggle] = useState(
    noLocalStorage ? false : localStorage.getItem(SHORTS_TOGGLE) === "true",
  );

  const searchStringOnChange = (e) => {
    setSearchString(e.target.value);
  };

  const shortsToggleOnChange = useCallback(
    (e) => {
      const nextValue = !shortsToggle;
      setShortsToggle(nextValue);
      if (!noLocalStorage) {
        localStorage.setItem(SHORTS_TOGGLE, nextValue.toString());
      }
      handleCheckboxToggle(nextValue);
    },
    [shortsToggle, setShortsToggle, handleCheckboxToggle],
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!noLocalStorage) {
      localStorage.setItem(SEARCH_STRING, searchString);
    }
    onSubmit(searchString);
  };

  return (
    <div className="search">
      <div className="search__container">
        <form className="search__form" onSubmit={handleSubmit}>
          <div className="search__box">
            <div className="search__box-input">
              <div className="search__icon"></div>
              <input
                {...(noLocalStorage ? {} : { required: "required" })}
                className="search__input"
                name="film"
                placeholder="Фильм"
                value={searchString}
                onChange={searchStringOnChange}
              ></input>
            </div>

            <div className="search__button-container">
              <button type="submit" className="search__button"></button>
            </div>
          </div>

          <FilterCheckbox
            value={shortsToggle}
            onChange={shortsToggleOnChange}
          />
        </form>
      </div>
    </div>
  );
}

export default SearchForm;
