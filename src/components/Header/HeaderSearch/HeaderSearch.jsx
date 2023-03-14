import React, { useState } from "react";
import IconSubmit from "@pictures/icons/header-search__icon.svg";
import c from "./style.module.css";

const HeaderSearch = ({ name, placeholder }) => {
  const [value, setValue] = useState("");
  
  return (
    <fieldset className={c.fieldset}>
      <input
        className={c.input}
        type="text"
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={(el) => setValue(el.target.value)}
      />
      <button className={c.submit}>
        <IconSubmit />
      </button>
    </fieldset>
  );
};

export default HeaderSearch;
