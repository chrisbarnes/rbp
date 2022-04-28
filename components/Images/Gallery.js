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

      <GalleryRow cols={1} images={[horizontalImages[14]]} />
      <GalleryRow cols={2} images={[verticalImages[16], verticalImages[17]]} />
      <GalleryRow cols={1} images={[horizontalImages[15]]} />
      <GalleryRow cols={3} images={[verticalImages[18], verticalImages[19], verticalImages[20]]} />
      <GalleryRow cols={1} images={[horizontalImages[16]]} />
      <GalleryRow cols={1} images={[horizontalImages[17]]} />
      <GalleryRow cols={3} images={[verticalImages[21], verticalImages[22], verticalImages[23]]} />
      <GalleryRow cols={2} images={[horizontalImages[18], horizontalImages[19]]} />
      <GalleryRow cols={1} images={[horizontalImages[20]]} />

      <GalleryRow cols={1} images={[horizontalImages[21]]} />
      <GalleryRow cols={2} images={[verticalImages[24], verticalImages[25]]} />
      <GalleryRow cols={1} images={[horizontalImages[22]]} />
      <GalleryRow cols={3} images={[verticalImages[26], verticalImages[27], verticalImages[28]]} />
      <GalleryRow cols={1} images={[horizontalImages[23]]} />
      <GalleryRow cols={1} images={[horizontalImages[24]]} />
      <GalleryRow cols={3} images={[verticalImages[29], verticalImages[30], verticalImages[31]]} />
      <GalleryRow cols={2} images={[horizontalImages[25], horizontalImages[26]]} />
      <GalleryRow cols={1} images={[horizontalImages[27]]} />

      <GalleryRow cols={1} images={[horizontalImages[28]]} />
      <GalleryRow cols={2} images={[verticalImages[32], verticalImages[33]]} />
      <GalleryRow cols={1} images={[horizontalImages[29]]} />
      <GalleryRow cols={3} images={[verticalImages[34], verticalImages[35], verticalImages[36]]} />
      <GalleryRow cols={1} images={[horizontalImages[30]]} />
      <GalleryRow cols={1} images={[horizontalImages[31]]} />
      <GalleryRow cols={3} images={[verticalImages[37], verticalImages[38], verticalImages[39]]} />
      <GalleryRow cols={2} images={[horizontalImages[32], horizontalImages[33]]} />
      <GalleryRow cols={1} images={[horizontalImages[34]]} />

      <GalleryRow cols={1} images={[horizontalImages[35]]} />
      <GalleryRow cols={2} images={[verticalImages[40], verticalImages[41]]} />
      <GalleryRow cols={1} images={[horizontalImages[36]]} />
      <GalleryRow cols={3} images={[verticalImages[42], verticalImages[43], verticalImages[44]]} />
      <GalleryRow cols={1} images={[horizontalImages[37]]} />
      <GalleryRow cols={1} images={[horizontalImages[38]]} />
      <GalleryRow cols={3} images={[verticalImages[45], verticalImages[46], verticalImages[47]]} />
      <GalleryRow cols={2} images={[horizontalImages[39], horizontalImages[40]]} />
      <GalleryRow cols={1} images={[horizontalImages[41]]} />
    </div>
  );
};
