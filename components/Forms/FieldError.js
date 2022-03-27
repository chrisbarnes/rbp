import React from "react";

export const FieldError = ({ error }) => {
  return (
    <span role="alert" className="block text-red-500 text-xs absolute left-5 bottom-2">
      {error.message ? error.message : "This field is required."}
    </span>
  );
};
