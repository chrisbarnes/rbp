import Link from "next/link";
import { Button } from "../Button/Button";
import { CalendlyLink } from "../Button/CalendlyLink";

export const FooterBlock = ({ footerDescription, footerCtaText, isFooterCtaCalendarLink, footerCtaLink }) => {
  return (
    <div className="mb-28">
      <div className="text-center max-w-3xl mx-auto">
        {footerDescription && <p className="text-green text-4xl text-center font-serif mb-16">{footerDescription}</p>}
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
