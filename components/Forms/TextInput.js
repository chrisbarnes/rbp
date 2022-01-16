import React from "react";
import PropTypes from "prop-types";
import classNames from "clsx";

export const TextInput = React.forwardRef((props, ref) => {
  const divClasses = classNames({
    "px-2": true,
    "pt-2": true,
    "pb-4": true,
    "border-2": true,
    "border-slate-700": !props.isError,
    "border-red-500": props.isError,
    relative: true,
  });

  return (
    <div className={divClasses}>
      <label className="block uppercase text-xs" htmlFor={props.id}>
        {props.label}
      </label>
      <input
        className="focus:outline-none"
        id={props.id}
        type="text"
        ref={ref}
        {...props}
      />
      {props.isError && (
        <span className="block text-red-500 text-xs absolute left-2 bottom-1">
          {props.error}
        </span>
      )}
    </div>
  );
});

TextInput.propTypes = {
  isError: PropTypes.bool,
  error: PropTypes.string,
  label: PropTypes.string,
  id: PropTypes.string,
};

TextInput.displayName = "TextInput";
