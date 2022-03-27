import { useFormContext } from "react-hook-form";
import { TextInput } from "./TextInput";
import { Select } from "./Select";
import { Textarea } from "./Textarea";

export const FormField = ({ type, id, isRequired, ...rest }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const requiredMessage = "This field is required.";

  switch (type) {
    case "Email":
      return (
        <TextInput
          id={id}
          errors={errors}
          type={type}
          {...rest}
          {...register(id, {
            required: { value: isRequired, message: requiredMessage },
            pattern: { value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, message: "Please enter a valid email." },
          })}
        />
      );
    case "Tel":
      return <TextInput id={id} errors={errors} type={type} {...rest} {...register(id, { required: isRequired })} />;
    case "Date":
      return (
        <TextInput
          id={id}
          errors={errors}
          type={type}
          {...rest}
          {...register(id, { required: isRequired })}
          min={new Date().toISOString().split("T")[0]}
        />
      );
    case "Text":
      return <TextInput id={id} errors={errors} type={type} {...rest} {...register(id, { required: isRequired })} />;
    case "Select":
      return <Select id={id} errors={errors} type={type} {...rest} {...register(id, { required: isRequired })} />;
    case "Textarea":
      return <Textarea id={id} errors={errors} {...rest} {...register(id, { required: isRequired })} />;

    default:
      return null;
  }
};
