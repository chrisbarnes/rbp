import Link from "next/link";
import { GridImage } from "./GridImage";
import { ContentfulRichText } from "../Typography/ContentfulRichText";

export const LinkedImageGridWithContent = ({ linkedImageGridItems, isStorybook }) => {
  return (
    <div className="flex flex-wrap">
      {linkedImageGridItems &&
        linkedImageGridItems.map((linkedImageGridItem, index) => {
          if (linkedImageGridItem.image) {
            return (
              <Link href={linkedImageGridItem.link} key={`linked-grid-image-${index}`} passHref>
                <a href={linkedImageGridItem.link} className="w-full md:w-1/3 aspect-square">
                  <GridImage
                    key={`grid-image-${index}`}
                    image={linkedImageGridItem.image}
                    preserveUrl={isStorybook}
                    disableWrapperClasses
                  />
                </a>
              </Link>
            );
          }

          if (linkedImageGridItem.heading) {
            return (
              <div
                className="md:w-1/3 aspect-square flex flex-col justify-center p-8 text-center relative z-10 before:content-[' '] before:absolute before:top-0 before:right-0 before:bottom-0 before:left-0 before:bg-grayPurple before:-z-10 md:before:scale-110"
                key={`linked-grid-content-${index}`}
              >
                <h2 className="mb-8">{linkedImageGridItem.heading}</h2>
                <h3>{linkedImageGridItem.description}</h3>
                {linkedImageGridItem.link && linkedImageGridItem.linkText && (
                  <Link href={linkedImageGridItem.link} passHref>
                    <a className="uppercase text-darkPurple font-bold no-underline" href={linkedImageGridItem.link}>
                      {linkedImageGridItem.linkText}
                    </a>
                  </Link>
                )}
              </div>
            );
          }
        })}
    </div>
  );
};
