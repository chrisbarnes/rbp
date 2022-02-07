import Image from "next/image";
import { ContentfulRichText } from "./ContentfulRichText";

export const ImageCallout = ({ image, content }) => {
  // Force webp as the default image format here
  let imageSrc = `https:${image.url}?fm=webp`;

  // Use a super low quality jpg as the blur data url
  let blurSrc = `https:${image.url}?fm=jpg&q=1`;

  const p = (node, children) => (
    <p className="text-2xl leading-10">{children}</p>
  );

  return (
    <section className="flex">
      <div className="basis-7/12 relative">
        <Image
          className="h-full"
          alt={image.title}
          src={imageSrc}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          placeholder="blur"
          blurDataURL={blurSrc}
        />
      </div>
      <div className="basis-5/12 p-16 bg-lavender/30">
        <ContentfulRichText content={content} altParagraph={p} />
      </div>
    </section>
  );
};
