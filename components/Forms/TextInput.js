import React from "react";

export const TextInput = React.forwardRef((props, ref) => {
  return (
    <>
      <label htmlFor={props.id}>{props.label}</label>
      <input id={props.id} type="text" ref={ref} {...props} />
    </>
  );
});

TextInput.displayName = "TextInput";
