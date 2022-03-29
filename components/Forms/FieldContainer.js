import React from "react";
import classNames from "clsx";
import styles from "./inputs.module.css";

export const FieldContainer = ({ isError, modifier, children }) => {
  const fieldContainerClasses = classNames({
    "px-5": true,
    "pt-4": true,
    "pb-8": true,
    border: true,
    "border-lightPurple": !isError,
    "border-darkerBlue": isError,
    "z-10": isError,
    relative: true,
    "w-full": true,
    "sm:w-6/12": modifier === 2,
    "flex-auto": true,
    "-ml-px": true,
    "-mt-px": true,
  });
  const inlineStyles = isError ? { outline: "3px solid #141B4D", outlineOffset: "-3px" } : {};

  return (
    <div className={`${fieldContainerClasses} ${styles.input}`} style={inlineStyles}>
      {children}
    </div>
  );
};
