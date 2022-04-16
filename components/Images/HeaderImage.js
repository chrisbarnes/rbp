import React from "react";
import Image from "next/image";

export const HeaderImage = ({ image, preserveUrl }) => {
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
    <Image
      alt={image.title}
      src={imageSrc}
      quality="100"
      layout="responsive"
      width={1280}
      height={768}
      placeholder="blur"
      blurDataURL={blurSrc}
      priority
    />
  );
};
