import { GalleryRow } from "./GalleryRow";

export const Gallery = ({ images }) => {
  const horizontalImages = images
    .filter((image) => image.width > image.height)
    .map((image) => ({ ...image, orientation: "horizontal" }));
  const verticalImages = images
    .filter((image) => image.height > image.width)
    .map((image) => ({ ...image, orientation: "vertical" }));

  return (
    <div>
      <GalleryRow cols={1} images={[horizontalImages[0]]} />
      <GalleryRow cols={2} images={[verticalImages[0], verticalImages[1]]} />
      <GalleryRow cols={1} images={[horizontalImages[1]]} />
      <GalleryRow cols={3} images={[verticalImages[2], verticalImages[3], verticalImages[4]]} />
      <GalleryRow cols={1} images={[horizontalImages[2]]} />
      <GalleryRow cols={1} images={[horizontalImages[3]]} />
      <GalleryRow cols={3} images={[verticalImages[5], verticalImages[6], verticalImages[7]]} />
      <GalleryRow cols={2} images={[horizontalImages[4], horizontalImages[5]]} />
      <GalleryRow cols={1} images={[horizontalImages[6]]} />

      <GalleryRow cols={1} images={[horizontalImages[7]]} />
      <GalleryRow cols={2} images={[verticalImages[8], verticalImages[9]]} />
      <GalleryRow cols={1} images={[horizontalImages[8]]} />
      <GalleryRow cols={3} images={[verticalImages[10], verticalImages[11], verticalImages[12]]} />
      <GalleryRow cols={1} images={[horizontalImages[9]]} />
      <GalleryRow cols={1} images={[horizontalImages[10]]} />
      <GalleryRow cols={3} images={[verticalImages[13], verticalImages[14], verticalImages[15]]} />
      <GalleryRow cols={2} images={[horizontalImages[11], horizontalImages[12]]} />
      <GalleryRow cols={1} images={[horizontalImages[13]]} />
    </div>
  );
};
