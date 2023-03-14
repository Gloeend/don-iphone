import React from "react";
import c from "./style.module.css";

const RadioButton = ({ attr, name, value, disabled = false, callback = () => {} }) => {
  const id = attr + Math.random();



  return (
    <div className={c.container}>
      <input type="radio" id={id} className={c.input} name={attr} disabled={disabled} />
      <label htmlFor={id} className={c.label}>
        <span>{name}</span> <span>{value}</span>
      </label>
    </div>
  );
};

export default RadioButton;
