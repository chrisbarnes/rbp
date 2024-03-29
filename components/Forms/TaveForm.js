import { useState, useEffect, useRef } from "react";
import { Form } from "./Form";
import { YouTubeVideo } from "../Video/YouTubeVideo";
import { CalendlyLink } from "../Button/CalendlyLink";
import { event } from "../../lib/gtag";

export const TaveForm = ({ youtubeVideoId }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isSubmissionComplete, setIsSubmissionComplete] = useState(false);
  const thankYouRef = useRef();
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
          name: "Extended Family Portraits",
          value: "Extended Family Portraits",
        },
        {
          name: "Family Portrait",
          value: "Family Portrait",
        },
        {
          name: "Maternity",
          value: "Maternity",
        },
        {
          name: "Newborn",
          value: "Newborn",
        },
        {
          name: "Other",
          value: "Other",
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
    setIsLoading(true);
    const response = await sendData(data);
    const { message } = await response.json();
    setIsLoading(false);

    if (message === "Success") {
      setIsSubmissionComplete(true);
    } else {
      setIsError(true);
    }
  };

  useEffect(() => {
    if (isSubmissionComplete) {
      thankYouRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });

      // Log GA event
      event({
        action: "generate_lead",
        category: "engagement",
        label: "Lead Submission",
      });

      // Tag for Google Ads Conversion
      gtag_report_conversion();
    }
  }, [isSubmissionComplete]);

  return (
    <div>
      {!isSubmissionComplete && (
        <Form
          fields={leadFields}
          id="taveForm"
          isLoading={isLoading}
          onFormSubmit={(data) => submitTaveLead(data)}
        />
      )}

      {isError && (
        <p className="font-sans text-darkPurple text-2xl leading-9 text-center max-w-xl mx-auto mb-14">
          Sorry. There was an error submitting your inquiry. Please try again or
          give us a call at - 215-278-9181 - to set up a time to talk.
        </p>
      )}

      {isSubmissionComplete && (
        <div className="mb-14">
          <p
            className="font-sans text-darkPurple text-2xl leading-9 text-center max-w-xl mx-auto mb-14"
            ref={thankYouRef}
          >
            Thank you!
          </p>

          {youtubeVideoId && <YouTubeVideo videoId={youtubeVideoId} />}

          <CalendlyLink buttonText="Schedule a consultation" />
        </div>
      )}
    </div>
  );
};
