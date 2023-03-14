import React from "react";
import c from "./style.module.css";


const defineClasses = (props) => {

  let res = [];

  switch (props.color) {
    case "purple":
      res.push(c.purple);
      break;
    case "gradient":
      res.push(c.gradient);
      break;
    case "gray":
      res.push(c.gray);
      break;
    case "red":
      res.push(c.red);
      break;
    default:
      res.push(c.default);
  }
  
  if (props.undegged) res.push(c.undegged)

  return res
}


const Button = (props) => {
  const classes = defineClasses(props)
  

  return <button onClick={props.callback ? () =>  props.callback() : null} className={c.button + ' ' + classes.join(' ')}>{props.children}</button>;
};

export default Button;
