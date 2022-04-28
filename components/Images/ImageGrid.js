import { GridImage } from "./GridImage";

export const ImageGrid = ({ images, isStorybook }) => {
  return (
    <div className="flex flex-wrap mb-32">
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
