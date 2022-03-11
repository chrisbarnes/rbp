import Image from "next/image";
import styles from "./GalleryImage.module.css";

export const GalleryImage = ({ image, preserveUrl, ...rest }) => {
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
    <div
      className={`${styles.galleryImage} ${
        image.orientation === "horizontal"
          ? styles["galleryImage--horizontal"]
          : styles["galleryImage--vertical"]
      }`}
    >
      <Image
        alt={image.title}
        src={imageSrc}
        layout="fill"
        placeholder="blur"
        blurDataURL={blurSrc}
      />
    </div>
  );
};
