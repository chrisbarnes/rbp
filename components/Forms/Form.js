import { FormProvider, useForm } from "react-hook-form";
import { FormField } from "./FormField";
import { Button } from "../Button/Button";
import { LoadingIndicator } from "../LoadingIndicator/LoadingIndicator";

export const Form = ({ id, fields, onFormSubmit, isLoading }) => {
  const methods = useForm();
  const onSubmit = (data) => onFormSubmit(data);

  return (
    <FormProvider {...methods}>
      <section className="mb-12">
        <div className="sm:py-16 mb-6 sm:mb-12 bg-lavender">
          <form
            className="flex flex-wrap max-w-dt-content mx-auto"
            onSubmit={methods.handleSubmit(onSubmit)}
            noValidate
            id={id}
          >
            {fields.map((field) => (
              <FormField key={field.id} {...field} />
            ))}
          </form>
        </div>
        <div className="text-center">
          <Button size="large" type="submit" form={id} isDisabled={isLoading}>
            Submit Inquiry
            {isLoading && <LoadingIndicator />}
          </Button>
        </div>
      </section>
    </FormProvider>
  );
};
