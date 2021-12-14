import React from "react";
import MyPara from "./MyPara";

const DemoOutput = (props) => {
  // Runs on every click because the show prop passed to it changes
  console.log("DemoOutput Running")
  return (
  <MyPara>{props.show ? "Its alive!!!" : ''}</MyPara>
  );
}

// only rerender DemoOutput and its children if DemoOutputs props changes
export default React.memo(DemoOutput)