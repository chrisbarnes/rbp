import { useFormContext } from "react-hook-form";
import { TextInput } from "./TextInput";
import { Select } from "./Select";

export const FormField = ({ type, id, ...rest }) => {
  const { register } = useFormContext();

  switch (type) {
    case "Text":
      return <TextInput id={id} {...rest} {...register(id)} />;
    case "Select":
      return <Select id={id} {...rest} {...register(id)} />;

    default:
      return null;
  }
};
