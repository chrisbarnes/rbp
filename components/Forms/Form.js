import { FormProvider, useForm } from "react-hook-form";
import { FormField } from "./FormField";
import { Button } from "../Button/Button";

export const Form = ({ fields, onFormSubmit }) => {
  const methods = useForm();
  const onSubmit = (data) => onFormSubmit(data);

  return (
    <FormProvider {...methods}>
      <section>
        <div className="py-16 mb-12 bg-lavender">
          <form
            className="flex flex-wrap max-w-dt-content mx-auto"
            onSubmit={methods.handleSubmit(onSubmit)}
            noValidate
          >
            {fields.map((field) => (
              <FormField key={field.id} {...field} />
            ))}
          </form>
        </div>
        <div className="text-center">
          <Button size="large" type="submit">
            Submit Inquiry
          </Button>
        </div>
      </section>
    </FormProvider>
  );
};
