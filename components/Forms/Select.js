import React from "react";
import { FieldContainer } from "./FieldContainer";
import { FieldLabel } from "./FieldLabel";
import { FieldError } from "./FieldError";

export const Select = React.forwardRef((props, ref) => {
  return (
    <FieldContainer isError={props.errors[props.id]} modifier={props.modifier}>
      <FieldLabel id={props.id} text={props.label} />
      <select
        className="appearance-none px-0 text-xl font-serif w-full"
        id={props.id}
        ref={ref}
        {...props}
        aria-invalid={props.errors[props.id] ? true : false}
      >
        {props.options.map((option, index) => (
          <option key={`${option.name}-${index}`} value={option.value}>
            {option.name}
          </option>
        ))}
      </select>
      {props.errors[props.id] && <FieldError error={props.errors[props.id]} />}
    </FieldContainer>
  );
});

Select.displayName = "Select";
