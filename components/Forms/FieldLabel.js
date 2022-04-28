import React from "react";

export const FieldLabel = ({ id, text }) => {
  return (
    <label className="block uppercase text-base mb-2 text-plum" htmlFor={id}>
      {text}
    </label>
  );
};
