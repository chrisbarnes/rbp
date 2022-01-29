import React from "react";

export const FieldError = ({ error }) => {
  return (
    <span className="block text-red-500 text-xs absolute left-2 bottom-1">
      {error}
    </span>
  );
};
