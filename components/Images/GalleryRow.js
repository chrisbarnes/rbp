import classNames from "clsx";
import { GalleryImage } from "./GalleryImage";

export const GalleryRow = ({ images, cols }) => {
  const wrapperClasses = classNames({
    "mb-3 sm:mb-5": true,
    "grid grid-cols-2 gap-x-3 sm:gap-x-5": cols === 2,
    "grid grid-cols-3 gap-x-3 sm:gap-x-5": cols === 3,
  });

  if (!images.filter((image) => !!image).length) {
    return null;
  }

  return (
    <div className={wrapperClasses}>
      {images && images.map((image, index) => <GalleryImage key={index} image={image} />)}
    </div>
  );
};
