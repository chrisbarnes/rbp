import { HeaderLinks } from "../Navigation/HeaderLinks";
import { HeaderImage } from "../Images/HeaderImage";

export const Header = ({ items, image, isStorybook }) => {
  return (
    <header className="mb-14">
      <div className="relative">
        <div className="fixed top-0 w-full z-20">
          <HeaderLinks links={items} />
        </div>
        <div className="w-full h-screen overflow-hidden">
          {image && image.url && (
            <HeaderImage image={image} preserveUrl={isStorybook} />
          )}
        </div>
      </div>
    </header>
  );
};
