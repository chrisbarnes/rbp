import { Form as FormComponent } from "../../../components/Forms/Form";

const FormStory = {
  title: "Components/Forms",
  component: FormComponent,
};

const formProps = {
  onFormSubmit: (data) => alert(`Form Submitted with: ${JSON.stringify(data, null, 2)}`),
  fields: [
    {
      type: "Text",
      label: "First Name",
      id: "firstname",
      modifier: 2,
      isRequired: true,
    },
    {
      type: "Text",
      label: "Last Name",
      id: "lastname",
      modifier: 2,
      isRequired: true,
    },
    {
      type: "Email",
      label: "Email",
      id: "email",
      modifier: 2,
      isRequired: true,
    },
    {
      type: "Tel",
      label: "Phone Number",
      id: "phone",
      modifier: 2,
      isRequired: true,
    },
    {
      type: "Select",
      label: "Shoot Type",
      id: "shootType",
      modifier: 2,
      isRequired: true,
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
      type: "Date",
      label: "Desired Date",
      id: "date",
      modifier: 2,
      isRequired: true,
    },
    {
      type: "Textarea",
      label: "Your Message",
      id: "message",
      modifier: 1,
      isRequired: false,
    },
    {
      type: "Select",
      label: "How did you hear about us?",
      id: "leadSource",
      modifier: 1,
      isRequired: true,
      options: [
        {
          name: "",
          value: "",
        },
        {
          name: "Google",
          value: "Google",
        },
        {
          name: "Friend",
          value: "Friend",
        },
      ],
    },
  ],
};

export default FormStory;

export const Form = () => <FormComponent {...formProps} />;
