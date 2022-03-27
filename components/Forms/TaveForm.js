import { Form } from "./Form";

export const TaveForm = () => {
  const leadFields = [
    {
      type: "Text",
      label: "First Name",
      id: "firstName",
      modifier: 2,
      isRequired: true,
    },
    {
      type: "Text",
      label: "Last Name",
      id: "lastName",
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
      label: "Phone",
      id: "phone",
      modifier: 2,
      isRequired: true,
    },
    {
      type: "Select",
      label: "Shoot Type",
      id: "shootType",
      options: [
        {
          name: "",
          value: "",
        },
        {
          name: "Family Portrait",
          value: "Family Portrait",
        },
        {
          name: "Maternity",
          value: "Maternity",
        },
      ],
      modifier: 2,
      isRequired: true,
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
      options: [
        {
          name: "",
          value: "",
        },
        {
          name: "Search Engine",
          value: "Search Engine",
        },
        {
          name: "Family/Friend/Co-worker",
          value: "Family/Friend/Co-worker",
        },
        {
          name: "Met in-person",
          value: "Met in-person",
        },
        {
          name: "Yelp",
          value: "Yelp",
        },
        {
          name: "Facebook",
          value: "Facebook",
        },
        {
          name: "Other",
          value: "Other",
        },
      ],
      modifier: 2,
      isRequired: true,
    },
  ];
  const sendData = async (data) => {
    return await fetch("/api/lead/submit", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };
  const submitTaveLead = async (data) => {
    const response = await sendData(data);
    const { message } = await response.json();

    console.log("message", message);
  };

  return (
    <div>
      <Form fields={leadFields} id="taveForm" onFormSubmit={(data) => submitTaveLead(data)} />
    </div>
  );
};
