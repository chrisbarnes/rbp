import Link from "next/link";
import { Button } from "../Button/Button";

export const SplitSection = ({ heading, children, link, linkText }) => {
  return (
    <section className="max-w-4xl mx-auto mb-28">
      <div className="flex">
        <p
          className="text-green text-4xl text-right font-serif w-72 shrink-0 pr-12 mb-8"
          style={{ lineHeight: "2.8rem" }}
        >
          {heading}
        </p>
        <div className="text-darkPurple text-2xl pl-12 leading-9 relative before:content-[' '] before:absolute before:bg-no-repeat before:bg-left-top before:bg-[url('/images/horizontal-dots.svg')] before:left-0 before:top-0 before:w-44 before:h-1 before:rotate-90 before:origin-left">
          {children}
        </div>
      </div>
      {link && linkText && (
        <div className="text-center mt-8">
          <Link href={`/${link}`} passHref>
            <Button type="link" size="large">
              {linkText}
            </Button>
          </Link>
        </div>
      )}
    </section>
  );
};
