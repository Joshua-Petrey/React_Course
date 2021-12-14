import React from "react";

const MyPara = (props) => {
  // Runs on every click because its content changes when DemoOutputs state changes
  console.log("MyPAra Running");
  return <p>{props.children}</p>;
};

export default MyPara;
