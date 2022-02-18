import { GridImage } from "./GridImage";

export const ImageGrid = ({ images, isStorybook }) => {
  return (
    <div className="flex flex-wrap">
      {images &&
        images.map((image, index) => (
          <GridImage
            key={`grid-image-${index}`}
            image={image}
            preserveUrl={isStorybook}
          />
        ))}
    </div>
  );
};
