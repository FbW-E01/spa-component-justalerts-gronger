import React from "react";
import ReactDOM from "react-dom";



const Box = (props) => {
  console.log(props);

  let test = "danger";
  let display;

  if (props.type === "blue") {
    test = "primary";
  } else if (props.type === "orange") {
    test = "warning";
  } 
  
  if (props.hide === true) {
    display = "none";
  }

  return <div className={`alert alert-${test} ${display}`} role="alert">
  {props.message}

  </div>
    
};

// Do not edit below this line
const jsx = <>
  <Box type="blue" message="Blue box" />
  <Box type="red" message="Red box" />
  <Box type="orange" message="Orange box" />
  <Box hide type="red" message="Hidden box" />
</>;
const element = document.getElementById("target");

ReactDOM.render(jsx, element);
