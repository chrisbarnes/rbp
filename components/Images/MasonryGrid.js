import { MasonryGridImage } from "./MasonryGridImage";

export const MasonryGrid = ({ images, preview }) => {
  if (!images) {
    return null;
  }

  return (
    <section
      className="grid gap-5 mb-20"
      style={{
        "grid-template-columns": "repeat( auto-fill, minmax( 320px, 1fr ) )",
        "grid-auto-rows": "270px",
      }}
    >
      {images.map((image, index) => (
        <div
          className={`overflow-hidden ${index % 2 === 0 ? "row-span-2" : ""}`}
          key={`grid-image-${index}`}
        >
          <MasonryGridImage image={image} preserveUrl={preview} />
        </div>
      ))}
    </section>
  );
};
