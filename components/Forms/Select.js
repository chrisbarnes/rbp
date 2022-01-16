import React from "react";
import { FieldContainer } from "./FieldContainer";
import { FieldLabel } from "./FieldLabel";
import { FieldError } from "./FieldError";

export const Select = React.forwardRef((props, ref) => {
  return (
    <FieldContainer isError={props.isError}>
      <FieldLabel id={props.id} text={props.label} />
      <select
        className="appearance-none px-0"
        id={props.id}
        ref={ref}
        {...props}
      >
        {props.options.map((option, index) => (
          <option key={`${option.name}-${index}`} value={option.value}>
            {option.name}
          </option>
        ))}
      </select>
      {props.isError && <FieldError error={props.error} />}
    </FieldContainer>
  );
});

Select.displayName = "Select";
