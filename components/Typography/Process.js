import { ProcessStep } from "./ProcessStep";
import { Button } from "../Button/Button";
import Link from "next/link";
import { CalendlyLink } from "../Button/CalendlyLink";

export const Process = ({ steps, footerDescription, footerCtaText, isFooterCtaCalendarLink, footerCtaLink }) => {
  return (
    <div className="mt-28 mb-28">
      {steps.map((step, index) => (
        <ProcessStep key={index} stepNum={index} {...step} />
      ))}
      <div className="text-center mt-40 max-w-3xl mx-auto">
        <p className="text-green text-4xl text-center font-serif mb-16">{footerDescription}</p>
        {!isFooterCtaCalendarLink && footerCtaLink && footerCtaText && (
          <Link href={footerCtaLink} passHref>
            <Button type="link" size="large">
              {footerCtaText}
            </Button>
          </Link>
        )}
        {isFooterCtaCalendarLink && <CalendlyLink buttonText={footerCtaText} />}
      </div>
    </div>
  );
};
