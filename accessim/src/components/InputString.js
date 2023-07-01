import React from "react";

function InputString(props) {
  return(
  <input type="text" placeholder={props.placeholder} className="input input-bordered input-info w-full max-w-xs" />
  );
}
export default InputString;
