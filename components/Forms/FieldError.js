import React from "react";

export const FieldError = ({ error, customMessage }) => {
  console.log(error);

  let message;

  if (error.type === "validate") {
    message = customMessage;
  } else {
    message = "This field is required.";
  }

  return (
    <span role="alert" className="block text-red-500 text-xs absolute left-5 bottom-2">
      {error.message ? error.message : message}
    </span>
  );
};
