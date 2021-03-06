import Image from "next/image";

export const MasonryGridImage = ({ image, preserveUrl }) => {
  if (!image) {
    return null;
  }

  // Force webp as the default image format here
  let imageSrc = `https:${image.url}?fm=webp`;

  // Use a super low quality jpg as the blur data url
  let blurSrc = `https:${image.url}?fm=jpg&q=1`;

  // If preserve url is true (storybook), don't force this to be an absolute url.
  // This is so we can serve an image easily out of the static storybook site.
  if (preserveUrl) {
    imageSrc = image.url;
    blurSrc = image.url.split(".")[0] + "-low." + image.url.split(".")[1];
  }

  return (
    <div className="mb-5">
      <Image
        alt={image.title}
        src={imageSrc}
        layout="responsive"
        width={image.width}
        height={image.height}
        placeholder="blur"
        blurDataURL={blurSrc}
      />
    </div>
  );
};
