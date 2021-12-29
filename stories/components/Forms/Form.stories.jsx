import { Form as FormComponent } from "../../../components/Forms/Form";

const FormStory = {
  title: "Components/Forms",
  component: FormComponent,
};

const formProps = {
  onFormSubmit: (data) =>
    alert(`Form Submitted with: ${JSON.stringify(data, null, 2)}`),
  fields: [
    {
      type: "Select",
      label: "Shoot Type",
      id: "shootType",
      options: [
        {
          name: "Family Portrait",
          value: "Family Portrait",
        },
        {
          name: "Maternity",
          value: "Maternity",
        },
      ],
    },
    {
      type: "Text",
      label: "Name",
      id: "name",
    },
  ],
};

export default FormStory;

export const Form = () => <FormComponent {...formProps} />;
