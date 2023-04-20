import React from "react";
import PropTypes from "prop-types";
import { FieldContainer } from "./FieldContainer";
import { FieldLabel } from "./FieldLabel";
import { FieldError } from "./FieldError";

export const TextInput = React.forwardRef(
  (
    { type, errors, id, modifier, label, customValidationMessage, ...rest },
    ref
  ) => {
    return (
      <FieldContainer type={type} isError={errors[id]} modifier={modifier}>
        <FieldLabel id={id} text={label} />
        <input
          className="focus:outline-none text-darkerBlue text-left text-xl font-serif w-full bg-transparent"
          id={id}
          type={type.toLowerCase()}
          ref={ref}
          aria-invalid={errors[id] ? true : false}
          {...rest}
        />
        {errors[id] && (
          <FieldError
            error={errors[id]}
            customMessage={customValidationMessage}
          />
        )}
      </FieldContainer>
    );
  }
);

TextInput.propTypes = {
  isError: PropTypes.bool,
  error: PropTypes.string,
  label: PropTypes.string,
  id: PropTypes.string,
};

TextInput.displayName = "TextInput";
