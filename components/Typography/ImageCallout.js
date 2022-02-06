import Image from "next/image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export const ImageCallout = ({ image, content }) => {
  // Force webp as the default image format here
  let imageSrc = `https:${image.url}?fm=webp`;

  // Use a super low quality jpg as the blur data url
  let blurSrc = `https:${image.url}?fm=jpg&q=1`;

  return (
    <section className="flex">
      <div className="basis-7/12">
        <Image
          alt={image.title}
          src={imageSrc}
          layout="responsive"
          width={726}
          height={484}
          placeholder="blur"
          blurDataURL={blurSrc}
        />
      </div>
      <div className="basis-5/12 p-16 bg-lavender/30">
        {documentToReactComponents(content)}
      </div>
    </section>
  );
};
