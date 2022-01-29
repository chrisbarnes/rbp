import React from "react";
import classNames from "clsx";
import PropTypes from "prop-types";

export const Button = ({ type, children, ...rest }) => {
  const primaryClasses = classNames({
    "px-4": true,
    "py-2": true,
    "text-slate-700": true,
    "border-2": true,
    "border-slate-700": true,
    "cursor-pointer": true,
    uppercase: true,
    "text-sm": true,
    "leading-none": true,
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
