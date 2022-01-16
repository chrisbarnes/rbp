import React from "react";

export const FieldLabel = ({ id, text }) => {
  return (
    <label className="block uppercase text-xs" htmlFor={id}>
      {text}
    </label>
  );
};
