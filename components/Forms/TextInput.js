import React from "react";
import PropTypes from "prop-types";
import { FieldContainer } from "./FieldContainer";
import { FieldLabel } from "./FieldLabel";
import { FieldError } from "./FieldError";

export const TextInput = React.forwardRef((props, ref) => {
  return (
    <FieldContainer isError={props.errors[props.id]} modifier={props.modifier}>
      <FieldLabel id={props.id} text={props.label} />
      <input
        className="focus:outline-none text-darkerBlue text-xl font-serif w-full"
        id={props.id}
        type={props.type.toLowerCase()}
        ref={ref}
        aria-invalid={props.errors[props.id] ? true : false}
        {...props}
      />
      {props.errors[props.id] && <FieldError error={props.errors[props.id]} />}
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
