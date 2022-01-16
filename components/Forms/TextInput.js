import React from "react";
import PropTypes from "prop-types";
import { FieldContainer } from "./FieldContainer";

export const TextInput = React.forwardRef((props, ref) => {
  return (
    <FieldContainer isError={props.isError}>
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
    </FieldContainer>
  );
});

TextInput.propTypes = {
  isError: PropTypes.bool,
  error: PropTypes.string,
  label: PropTypes.string,
  id: PropTypes.string,
};

TextInput.displayName = "TextInput";
