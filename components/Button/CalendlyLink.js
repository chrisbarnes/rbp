import Script from "next/script";
import { Button } from "./Button";

export const CalendlyLink = ({ buttonText }) => {
  const handleCalendlyClick = () => {
    Calendly.initPopupWidget({
      url: "https://calendly.com/rae-barnes/call-consultations?text_color=5d3754&primary_color=141b4d",
    });
    return false;
  };

  return (
    <>
      <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
      <Script src="https://assets.calendly.com/assets/external/widget.js" />

      <div className="my-14 text-center">
        <Button type="button" size="large" onClick={handleCalendlyClick}>
          {buttonText}
        </Button>
      </div>
    </>
  );
};
