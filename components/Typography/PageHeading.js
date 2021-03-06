import React from "react";

export const PageHeading = ({ Type, children }) => {
  return <Type className="max-w-lg mx-auto px-6 md:px-0">{children}</Type>;
};
