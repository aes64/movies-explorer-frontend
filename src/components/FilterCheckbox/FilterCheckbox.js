import React from "react";
import "./FilterCheckbox";

function FilterCheckbox({ value, onChange }) {
  return (
    <div className="checkbox">
      <label className="checkbox__label">
        <input
          checked={value}
          onChange={onChange}
          className="checkbox__button"
          type="checkbox"
        />
      </label>
      <p className="checkbox__text">Короткометражки</p>
    </div>
  );
}

export default FilterCheckbox;
