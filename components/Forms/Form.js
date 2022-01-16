import { FormProvider, useForm } from "react-hook-form";
import { FormField } from "./FormField";
import { Button } from "../Button/Button";

export const Form = ({ fields, onFormSubmit }) => {
  const methods = useForm();
  const onSubmit = (data) => onFormSubmit(data);

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        {fields.map((field) => (
          <FormField key={field.id} {...field} />
        ))}

        <Button type="submit">Submit</Button>
      </form>
    </FormProvider>
  );
};
