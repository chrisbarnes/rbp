import { HeaderLinks } from "../Navigation/HeaderLinks";
import { HeaderImage } from "../Images/HeaderImage";

export const Header = ({ items, image, isStorybook }) => {
  return (
    <div className="relative">
      <div className="fixed top-0 w-full z-10">
        <HeaderLinks links={items} />
      </div>
      <div className="absolute top-0 w-full h-screen">
        <HeaderImage image={image} preserveUrl={isStorybook} />
      </div>
    </div>
  );
};
