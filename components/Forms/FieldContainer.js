import React from "react";
import classNames from "clsx";

export const FieldContainer = ({ isError, children }) => {
  const fieldContainerClasses = classNames({
    "px-2": true,
    "pt-2": true,
    "pb-4": true,
    "border-2": true,
    "border-slate-700": !isError,
    "border-red-500": isError,
    relative: true,
  });

  return <div className={fieldContainerClasses}>{children}</div>;
};
