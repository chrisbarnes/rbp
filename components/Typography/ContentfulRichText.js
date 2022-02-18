import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, MARKS, INLINES } from "@contentful/rich-text-types";
import Image from "next/image";

export const ContentfulRichText = ({
  content,
  altParagraph,
  altUl,
  altLink,
  altImage,
}) => {
  const options = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: altImage
        ? altImage
        : (node, children) => {
            // Force webp as the default image format here
            let imageSrc = `https:${node?.data?.target?.fields?.file?.url}?fm=webp`;

            // Use a super low quality jpg as the blur data url
            let blurSrc = `https:${node?.data?.target?.fields?.file?.url}?fm=jpg&q=1`;

            return (
              <span className="max-w-full">
                <Image
                  alt={node?.data?.target?.fields?.title}
                  src={imageSrc}
                  layout="responsive"
                  width={1200}
                  height={800}
                  placeholder="blur"
                  blurDataURL={blurSrc}
                />
              </span>
            );
          },
      [BLOCKS.PARAGRAPH]: altParagraph
        ? altParagraph
        : (node, children) => <p className="text-2xl">{children}</p>,
      [BLOCKS.UL_LIST]: altUl
        ? altUl
        : (node, children) => {
            return (
              <ul className="">
                {children.map((item) => (
                  <li key={item.key}>
                    {item.props.children[0].props.children[0]}
                  </li>
                ))}
              </ul>
            );
          },
      [INLINES.HYPERLINK]: altLink
        ? altLink
        : (node, children) => {
            return (
              <a href={node.data.uri} target="_blank" rel="noopener noreferrer">
                {children}
              </a>
            );
          },
    },
  };

  return <>{documentToReactComponents(content, options)}</>;
};
