import { Form } from "./Form";

export const TaveForm = () => {
  const leadFields = [
    {
      type: "Text",
      label: "First Name",
      id: "firstName",
    },
    {
      type: "Text",
      label: "Last Name",
      id: "lastName",
    },
    {
      type: "Text",
      label: "Email",
      id: "email",
    },
    {
      type: "Text",
      label: "Phone",
      id: "phone",
    },
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
      label: "Desired Date",
      id: "date",
    },
    {
      type: "Select",
      label: "How did you hear about us?",
      id: "leadSource",
      options: [
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
      Submit a Tave form.
      <Form fields={leadFields} onFormSubmit={(data) => submitTaveLead(data)} />
    </div>
  );
};
