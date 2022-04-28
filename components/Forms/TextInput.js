import React from "react";
import PropTypes from "prop-types";
import { FieldContainer } from "./FieldContainer";
import { FieldLabel } from "./FieldLabel";
import { FieldError } from "./FieldError";

export const TextInput = React.forwardRef((props, ref) => {
  return (
    <FieldContainer type={props.type} isError={props.errors[props.id]} modifier={props.modifier}>
      <FieldLabel id={props.id} text={props.label} />
      <input
        className="focus:outline-none text-darkerBlue text-left text-xl font-serif w-full bg-transparent"
        id={props.id}
        type={props.type.toLowerCase()}
        ref={ref}
        aria-invalid={props.errors[props.id] ? true : false}
        {...props}
      />
      {props.errors[props.id] && (
        <FieldError error={props.errors[props.id]} customMessage={props.customValidationMessage} />
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
