import { ContentfulRichText } from "./ContentfulRichText";
import { Button } from "../Button/Button";
import Link from "next/link";

export const BasicContentBlock = ({ richText, linkSlug, linkText }) => {
  if (!richText && !linkText) {
    return null;
  }

  return (
    <div className="text-center">
      {richText && (
        <ContentfulRichText
          content={richText}
          altParagraph={(node, children) => (
            <p className="text-xl mb-8">{children}</p>
          )}
          altH3={(node, children) => (
            <h3
              className="text-green text-4xl pb-6 mb-8 bg-bottom bg-no-repeat bg-[url('/images/horizontal-dots.svg')]"
              style={{ backgroundSize: "176px 2px" }}
            >
              {children}
            </h3>
          )}
        />
      )}
      {linkText && (
        <Link href={`/${linkSlug}`} passHref>
          <Button type="link" size="large">
            {linkText}
          </Button>
        </Link>
      )}
    </div>
  );
};
