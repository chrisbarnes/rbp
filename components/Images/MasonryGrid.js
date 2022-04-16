import { MasonryGridImage } from "./MasonryGridImage";
import { chunkArrayInGroups } from "../../lib/utils";

export const MasonryGrid = ({ images, preview }) => {
  if (!images) {
    return null;
  }

  const imageGroups = chunkArrayInGroups(images, Math.ceil(images.length / 3));

  console.log("imagegroups", imageGroups);

  const col1 = imageGroups[0] && imageGroups[0].length ? imageGroups[0] : null;
  const col2 = imageGroups[1] && imageGroups[1].length ? imageGroups[1] : null;
  const col3 = imageGroups[2] && imageGroups[2].length ? imageGroups[2] : null;

  return (
    <section className="grid gap-5 mb-20 md:grid-cols-3">
      <div>
        {col1 &&
          col1.map((image, index) => (
            <div key={index}>
              <MasonryGridImage image={image} preserveUrl={preview} />
            </div>
          ))}
      </div>
      <div>
        {col2 &&
          col2.map((image, index) => (
            <div key={index}>
              <MasonryGridImage image={image} preserveUrl={preview} />
            </div>
          ))}
      </div>
      <div>
        {col3 &&
          col3.map((image, index) => (
            <div key={index}>
              <MasonryGridImage image={image} preserveUrl={preview} />
            </div>
          ))}
      </div>
    </section>
  );
};
