import { FormProvider, useForm } from "react-hook-form";
import { FormField } from "./FormField";
import { Button } from "../Button/Button";

export const Form = ({ fields, onFormSubmit }) => {
  const methods = useForm();
  const onSubmit = (data) => onFormSubmit(data);

  return (
    <FormProvider {...methods}>
      <form className="flex flex-wrap" onSubmit={methods.handleSubmit(onSubmit)} noValidate>
        {fields.map((field) => (
          <FormField key={field.id} {...field} />
        ))}

        <Button type="submit">Submit</Button>
      </form>
    </FormProvider>
  );
};
