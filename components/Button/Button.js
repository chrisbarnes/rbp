import React from "react";
import classNames from "clsx";
import PropTypes from "prop-types";

// eslint-disable-next-line react/display-name
export const Button = React.forwardRef(({ type, size, isDisabled, children, ...rest }, ref) => {
  const primaryClasses = classNames({
    "px-4": size !== "large",
    "py-4": size !== "large",
    "px-6": size === "large",
    "py-5": size === "large",
    "text-darkPurple": true,
    border: true,
    "border-plum": true,
    "cursor-pointer": true,
    uppercase: true,
    "text-sm": size !== "large",
    "text-xl": size === "large",
    "leading-none": true,
    "no-underline": true,
    "inline-block": true,
    "focus:outline focus:outline-2 focus:outline-plum focus:outline-offset-2": true,
  });

  if (type === "link") {
    return (
      <a className={primaryClasses} {...rest} ref={ref}>
        {children}
      </a>
    );
  }

  return (
    <button className={primaryClasses} type={type} {...rest} ref={ref} disabled={isDisabled}>
      {children}
    </button>
  );
});

Button.propTypes = {
  type: PropTypes.oneOf(["link", "button", "submit"]),
};
