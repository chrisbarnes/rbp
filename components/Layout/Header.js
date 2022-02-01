import { HeaderLinks } from "../Navigation/HeaderLinks";
import { HeaderImage } from "../Images/HeaderImage";

export const Header = ({ items, image, isStorybook }) => {
  return (
    <header>
      <div className="relative">
        <div className="fixed top-0 w-full z-10">
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
