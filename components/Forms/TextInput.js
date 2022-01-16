import React from "react";
import PropTypes from "prop-types";
import { FieldContainer } from "./FieldContainer";
import { FieldLabel } from "./FieldLabel";
import { FieldError } from "./FieldError";

export const TextInput = React.forwardRef((props, ref) => {
  return (
    <FieldContainer isError={props.isError}>
      <FieldLabel id={props.id} text={props.label} />
      <input
        className="focus:outline-none"
        id={props.id}
        type="text"
        ref={ref}
        {...props}
      />
      {props.isError && <FieldError error={props.error} />}
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
