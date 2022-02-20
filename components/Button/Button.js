import React from "react";
import classNames from "clsx";
import PropTypes from "prop-types";

// eslint-disable-next-line react/display-name
export const Button = React.forwardRef(
  ({ type, size, children, ...rest }, ref) => {
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
      "inline-block": true,
    });

    if (type === "link") {
      return (
        <a className={primaryClasses} {...rest} ref={ref}>
          {children}
        </a>
      );
    }

    return (
      <button className={primaryClasses} type={type} {...rest} ref={ref}>
        {children}
      </button>
    );
  }
);

Button.propTypes = {
  type: PropTypes.oneOf(["link", "button", "submit"]),
};
