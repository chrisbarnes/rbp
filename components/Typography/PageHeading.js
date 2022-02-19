import React from "react";

export const PageHeading = ({ Type, children }) => {
  return <Type className="max-w-lg mx-auto">{children}</Type>;
};
