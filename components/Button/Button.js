import React from "react";
import classNames from "clsx";
import PropTypes from "prop-types";

export const Button = ({ type, size, children, ...rest }) => {
  const primaryClasses = classNames({
    "px-4": true,
    "py-4": true,
    "text-darkPurple": true,
    border: true,
    "border-plum": true,
    "cursor-pointer": true,
    uppercase: true,
    "text-sm": true,
    "text-xl": size === "large",
    "leading-none": true,
    "no-underline": true,
  });

  if (type === "link") {
    return (
      <a className={primaryClasses} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <button className={primaryClasses} type={type} {...rest}>
      {children}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.oneOf(["link", "button", "submit"]),
};
