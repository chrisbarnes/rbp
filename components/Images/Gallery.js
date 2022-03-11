import { GalleryImage } from "./GalleryImage";

export const Gallery = ({ images }) => {
  const horizontalImages = images
    .filter((image) => image.width > image.height)
    .map((image) => ({ ...image, orientation: "horizontal" }));
  const verticalImages = images
    .filter((image) => image.height > image.width)
    .map((image) => ({ ...image, orientation: "vertical" }));

  console.log("horizontalImages", horizontalImages);
  console.log("verticalImages", verticalImages);

  return (
    <div>
      <div className="mb-3 sm:mb-5">
        <GalleryImage image={horizontalImages[0]} />
      </div>
      <div className="grid grid-cols-2 gap-x-3 sm:gap-x-5 mb-3 sm:mb-5">
        <GalleryImage image={verticalImages[0]} />
        <GalleryImage image={verticalImages[1]} />
      </div>
      <div className="mb-3 sm:mb-5">
        <GalleryImage image={horizontalImages[1]} />
      </div>
      <div className="grid grid-cols-3 gap-x-3 sm:gap-x-5 mb-3 sm:mb-5">
        <GalleryImage image={verticalImages[2]} />
        <GalleryImage image={verticalImages[3]} />
        <GalleryImage image={verticalImages[4]} />
      </div>
      <div className="mb-3 sm:mb-5">
        <GalleryImage image={horizontalImages[2]} />
      </div>
      <div className="mb-3 sm:mb-5">
        <GalleryImage image={horizontalImages[3]} />
      </div>
      <div className="grid grid-cols-3 gap-x-3 sm:gap-x-5 mb-3 sm:mb-5">
        <GalleryImage image={verticalImages[5]} />
        <GalleryImage image={verticalImages[6]} />
        <GalleryImage image={verticalImages[7]} />
      </div>
      <div className="grid grid-cols-2 gap-x-3 sm:gap-x-5 mb-3 sm:mb-5">
        <GalleryImage image={horizontalImages[4]} />
        <GalleryImage image={horizontalImages[5]} />
      </div>
      <div className="mb-3 sm:mb-5">
        <GalleryImage image={horizontalImages[6]} />
      </div>

      <div className="mb-3 sm:mb-5">
        <GalleryImage image={horizontalImages[7]} />
      </div>
      <div className="grid grid-cols-2 gap-x-3 sm:gap-x-5 mb-3 sm:mb-5">
        <GalleryImage image={verticalImages[8]} />
        <GalleryImage image={verticalImages[9]} />
      </div>
      <div className="mb-3 sm:mb-5">
        <GalleryImage image={horizontalImages[8]} />
      </div>
      <div className="grid grid-cols-3 gap-x-3 sm:gap-x-5 mb-3 sm:mb-5">
        <GalleryImage image={verticalImages[10]} />
        <GalleryImage image={verticalImages[11]} />
        <GalleryImage image={verticalImages[12]} />
      </div>
      <div className="mb-3 sm:mb-5">
        <GalleryImage image={horizontalImages[9]} />
      </div>
      <div className="mb-3 sm:mb-5">
        <GalleryImage image={horizontalImages[10]} />
      </div>
      <div className="grid grid-cols-3 gap-x-3 sm:gap-x-5 mb-3 sm:mb-5">
        <GalleryImage image={verticalImages[13]} />
        <GalleryImage image={verticalImages[14]} />
        <GalleryImage image={verticalImages[15]} />
      </div>
      <div className="grid grid-cols-2 gap-x-3 sm:gap-x-5 mb-3 sm:mb-5">
        <GalleryImage image={horizontalImages[11]} />
        <GalleryImage image={horizontalImages[12]} />
      </div>
      <div className="mb-3 sm:mb-5">
        <GalleryImage image={horizontalImages[13]} />
      </div>
    </div>
  );
};
