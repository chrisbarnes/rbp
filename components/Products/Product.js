import Image from "next/image";
import { ContentfulRichText } from "../Typography/ContentfulRichText";

export const Product = ({ image, heading, subHeading, content }) => {
  return (
    <div className="pb-20">
      <div className="mb-10">
        <Image alt={image.title} src={`https:${image.url}`} layout="responsive" width={640} height={640} />
      </div>
      <h3 className="text-green text-4xl text-center font-serif mb-2">{heading}</h3>
      <h4 className="text-darkPurple text-2xl text-center font-sans mb-4">{subHeading}</h4>
      <div className="px-10 sm:px-20">
        <ContentfulRichText content={content} altParagraph={(node, children) => <p className="mb-8">{children}</p>} />
      </div>
    </div>
  );
};
