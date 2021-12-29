import React from "react";

export const Select = React.forwardRef((props, ref) => {
  return (
    <>
      <label htmlFor={props.id}>{props.label}</label>
      <select id={props.id} ref={ref} {...props}>
        {props.options.map((option, index) => (
          <option key={`${option.name}-${index}`} value={option.value}>
            {option.name}
          </option>
        ))}
      </select>
    </>
  );
});

Select.displayName = "Select";
