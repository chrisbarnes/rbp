import React from "react";

export const JumpLink = ({ text, section }) => {
  return (
    <a
      className="font-sans uppercase text-plum text-sm px-4"
      href={`#${section}`}
    >
      {text}
    </a>
  );
};
